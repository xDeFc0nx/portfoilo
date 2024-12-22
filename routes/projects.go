package routes

import (
	"github.com/gofiber/fiber/v2"

	"github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/models"
)

func Get_Projects_func(c *fiber.Ctx) error {
	var projects []models.Projects

	handlers.GetDB().Find(&projects)
	return c.JSON(fiber.Map{"Projects": projects})
}

func Get_Project_by_Id(c *fiber.Ctx) error {
	var project models.Projects

	id := c.Params("id")
	if id == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Project ID is required"})
	}

	handlers.GetDB().Where("id =?", id).First(&project)
	return c.JSON(project)
}
func Create_Project(c *fiber.Ctx) error {
	if err := handlers.Check_Auth_func(c); err != nil {
		return err
	}

	file, err := c.FormFile("Logo")
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid file logo", "details": err.Error()})
	}

	// Generate a unique filename to avoid collisions
	filePath := "client/public/assets/" + file.Filename
	if err := c.SaveFile(file, filePath); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to save file", "details": err.Error()})
	}

	project := new(models.Projects)
	form, err := c.MultipartForm() // This gets all the multipart form data
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Failed to parse multipart form"})
	}

	// Get Technologies[] values as slice of strings
	technologies := form.Value["Technologies[]"] // This is a slice of strings
	if len(technologies) > 0 {
		project.Technologies = technologies
	}

	Libraries := form.Value["Libraries[]"] // This is a slice of strings
	if len(Libraries) > 0 {
		project.Libraries = Libraries
	}
	Images := form.Value["Images[]"] // This is a slice of strings
	if len(Images) > 0 {
		project.Images = Images
	}

	var images []string
	imageFiles, ok := form.File["Images[]"]
	if ok {
		for _, imageFile := range imageFiles {
			// Save each image file with a unique filename
			imagePath := "client/public/assets/" + imageFile.Filename
			imageurl := file.Filename
			if err := c.SaveFile(imageFile, imagePath); err != nil {
				return c.Status(500).JSON(fiber.Map{"error": "Failed to save image file", "details": err.Error()})
			}
			// Store image path in the images slice
			images = append(images, imageurl)
		}
	}
	project.Images = images
	// Assign the image to project
	project.Logo = file.Filename

	if err := c.BodyParser(project); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid project data", "details": err.Error()})
	}

	// Create project in database
	if err := handlers.GetDB().Create(project).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create project", "details": err.Error()})
	}

	return c.JSON(fiber.Map{"message": "Project created successfully!"})
}

func Delete_Project_func(c *fiber.Ctx) error {
	if err := handlers.Check_Auth_func(c); err != nil {
		return err
	}
	id := c.Params("id")
	if id == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Project ID is required"})
	}
	var project models.Projects
	handlers.GetDB().Where("id =?", id).Delete(&project)
	return c.JSON(fiber.Map{"message": "Project deleted!"})
}

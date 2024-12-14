package routes

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"

	DB "github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/models"
)

func Get_projects(c *fiber.Ctx) error {
	db, err := DB.Connect()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to connect to database"})
	}

	var projects []models.Projects

	db.Find(&projects)
	return c.JSON(fiber.Map{"Projects": projects})
}

func Create_Project(c *fiber.Ctx) error {

	cookie := c.Cookies("jwt-token")

	token, err := jwt.ParseWithClaims(cookie, &jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_KEY")), nil
	})
	if err != nil || !token.Valid {
		return c.Status(401).JSON(fiber.Map{"error": "Unauthorized"})
	}
	claims := token.Claims

	db, err := DB.Connect()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to connect to database"})
	}

	project := new(models.Projects)
	if err := c.BodyParser(project); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	db.Create(project)
	return c.JSON(fiber.Map{"message": "Project created!", "claims": claims})
}

func Delete_Project(c *fiber.Ctx) error {

	cookie := c.Cookies("jwt-token")

	token, err := jwt.ParseWithClaims(cookie, &jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_KEY")), nil
	})
	if err != nil || !token.Valid {
		return c.Status(401).JSON(fiber.Map{"error": "Unauthorized"})
	}
	claims := token.Claims

	db, err := DB.Connect()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to connect to database"})
	}

	id := c.Params("id")
	var project models.Projects
	db.Where("id =?", id).Delete(&project)
	return c.JSON(fiber.Map{"message": "Project deleted!", "claims": claims})
}

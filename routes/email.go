package routes

import (
	"github.com/gofiber/fiber/v2"

	"github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/models"
)

func Create_Email_func(c *fiber.Ctx) error {

	email := new(models.Email)

	if err := c.BodyParser(email); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid email data", "details": err.Error()})
	}

	if err := handlers.GetDB().Create(email).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to send email", "details": err.Error()})
	}

	return c.JSON(fiber.Map{"message": "Email Sent successfully!"})

}

func Get_Emails_func(c *fiber.Ctx) error {
	if err := handlers.Check_Auth_func(c); err != nil {
		return err // If not authenticated, return error (response already handled by Check_Auth_func)
	}
	var emails [](models.Email)

	handlers.GetDB().Find(&emails)
	return c.JSON(fiber.Map{"emails": emails})
}

package routes

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"

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
	email := new(models.Email)

	cookie := c.Cookies("jwt-token")

	token, err := jwt.ParseWithClaims(cookie, &jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_KEY")), nil
	})
	if err != nil || !token.Valid {
		return c.Status(401).JSON(fiber.Map{"error": "Unauthorized"})
	}
	if err := handlers.GetDB().Find(email).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to get emails", "details": err.Error()})
	}
	return c.JSON(email)
}

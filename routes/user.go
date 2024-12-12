package routes

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/xDeFc0nx/logger-go-pkg"
	"golang.org/x/crypto/bcrypt"

	DB "github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/models"

)

func CreateUser(c *fiber.Ctx) error {
	logger.Debug("CreateUser called")
	db, nil := DB.Connect()

	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
	}
	user.Password = string(hashedPassword)

	// token, exp, err := Create_JWT_Token(*user)
	// if err != nil {
	// 	return c.Status(500).JSON(fiber.Map{"error": "Failed to create JWT token"})

	// }
	db.Create(user)
	return c.JSON(user)
}

func Create_JWT_Token(user models.User) (string, int64, error) {
	exp := time.Now().Add(time.Minute * 30).Unix()
	token := jwt.New(jwt.SigningMethodES256)
	claims := token.Claims.(jwt.MapClaims)
	claims["user_id"] = user.ID
	claims["exp"] = exp
	t, err := token.SignedString([]byte("your_secret_key"))
	if err != nil {
		return "", 0, err
	}
	return t, exp, nil
}

package routes

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"

	DB "github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/models"
)

// func CreateUser(c *fiber.Ctx) error {

// 	db, nil := DB.Connect()

// 	user := new(models.User)
// 	if err := c.BodyParser(user); err != nil {
// 		return c.Status(400).JSON(err.Error())
// 	}
// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
// 	}
// 	user.Password = string(hashedPassword)

// 	token, exp, err := Create_JWT_Token(*user)
// 	if err != nil {
// 		return c.Status(500).JSON(fiber.Map{"error": "Failed to create JWT token"})

// 	}

// 	db.Create(user)
// 	return c.JSON(fiber.Map{"user": user, "token": token, "exp": exp})
// }

func Create_JWT_Token(user models.User) (string, int64, error) {
	exp := time.Now().Add(time.Minute * 30).Unix()
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["user_id"] = user.ID
	claims["exp"] = exp
	t, err := token.SignedString([]byte("13b4014a9f523889"))
	if err != nil {
		return "", 0, err
	}
	return t, exp, nil
}

func Login_func(c *fiber.Ctx) error {

	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	db, err := DB.Connect()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to connect to database"})
	}

	var foundUser models.User
	db.Where("username =?", user.Username).First(&foundUser)
	if foundUser.ID == 0 {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid username or password"})
	}

	err = bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(user.Password))
	if err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid username or password"})
	}
	token, exp, err := Create_JWT_Token(foundUser)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create JWT token"})
	}
	return c.JSON(fiber.Map{"user": foundUser, "token": token, "exp": exp})

}

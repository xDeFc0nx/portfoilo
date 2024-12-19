package routes

import (
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"

	"github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/models"
)

// func CreateUser(c *fiber.Ctx) error {

// 	user := new(models.User)
// 	if err := c.BodyParser(user); err != nil {
// 		return c.Status(400).JSON(err.Error())
// 	}
// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
// 	}
// 	user.Password = string(hashedPassword)

// 	token, exp, err := handlers.Create_JWT_Token(*user)
// 	if err != nil {
// 		return c.Status(500).JSON(fiber.Map{"error": "Failed to create JWT token"})

// 	}

// 	handlers.GetDB().Create(user)
// 	return c.JSON(fiber.Map{"user": user, "token": token, "exp": exp})
// }

func Login_func(c *fiber.Ctx) error {

	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	var foundUser models.User
	handlers.GetDB().Where("username =?", user.Username).First(&foundUser)
	if foundUser.ID == 0 {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid username or password"})
	}

	err := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(user.Password))
	if err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid username or password"})
	}
	token, exp, err := handlers.Create_JWT_Token(foundUser)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create JWT token"})
	}

	cookie := fiber.Cookie{
		Name:     "jwt-token",
		Value:    token,
		Expires:  time.Unix(exp, 0),
		HTTPOnly: true,
	}
	c.Cookie(&cookie)
	return c.JSON(fiber.Map{"message": "Success"})

}
func Auth_func(c *fiber.Ctx) error {
	// Retrieve the token from the cookie
	tokenString := c.Cookies("jwt-token")
	if tokenString == "" {
		return c.Status(401).JSON(fiber.Map{"error": "Missing jwt-token cookie"})
	}

	// Parse and validate the JWT
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Validate the signing method
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		// Return the secret key for validation
		return []byte(os.Getenv("SECRET_KEY")), nil
	})

	if err != nil || !token.Valid {
		return c.Status(403).JSON(fiber.Map{"error": "Invalid or expired JWT token"})
	}

	// Token is valid, you can extract claims if needed
	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		fmt.Printf("User claims: %v\n", claims)
		// Optionally include claims in the response
		return c.JSON(fiber.Map{"message": "Success", "claims": claims})
	}

	return c.JSON(fiber.Map{"message": "Success"})
}

func Logout_func(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "jwt-token",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}
	c.Cookie(&cookie)

	return c.JSON(fiber.Map{"message": "Success"})

}

package main

import (
	"os"

	jwtware "github.com/gofiber/contrib/jwt"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"

	DB "github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/routes"
)

func Setup_Routes(app *fiber.App) {
	app.Post("api/CreateUser", routes.CreateUser)
	app.Post("api/Login", routes.Login_func)

}
func main() {

	godotenv.Load(".env")
	DB.Connect()
	PORT := os.Getenv("PORT")

	app := fiber.New()
	Setup_Routes(app)

	private := app.Group("/Private")

	private.Use(jwtware.New(jwtware.Config{
		SigningKey: jwtware.SigningKey{Key: []byte("13b4014a9f5238")},
	}))

	private.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"success": true, "path": "private"})
	})

	public := app.Group("/public")
	public.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"success": true, "path": "public"})
	})
	app.Listen(PORT)

}

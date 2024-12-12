package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"

	"github.com/xDeFc0nx/portofoilo/routes"
)

func Setup_Routes(app *fiber.App) {

	app.Post("api/CreateUser", routes.CreateUser)
}
func main() {

	godotenv.Load(".env")

	PORT := os.Getenv("PORT")

	app := fiber.New()
	app.Listen(PORT)

	Setup_Routes(app)

}

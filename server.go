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

	app.Post("api/Login", routes.Login_func)
	app.Get("api/getprojects", routes.Get_projects)
	app.Post("api/createproject", routes.Create_Project)
	app.Post("api/deleteproject:", routes.Delete_Project)
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

	// private.Post("api/createproject", routes.Create_Project)

	public := app.Group("/public")
	public.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"success": true, "path": "public"})
	})
	app.Listen(PORT)

}

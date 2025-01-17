package main

import (
	"os"
	"path/filepath"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/xDeFc0nx/logger-go-pkg"

	"github.com/xDeFc0nx/portofoilo/handlers"
	DB "github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/routes"
)

func Setup_Routes(app *fiber.App) {
	app.Post("api/createuser", routes.CreateUser)
	app.Post("api/login", routes.Login_func)
	app.Post("api/logout", routes.Logout_func)
	app.Get("api/getprojects", routes.Get_Projects_func)
	app.Get("api/getproject/:id", routes.Get_Project_by_Id)
	app.Post("api/createproject", routes.Create_Project)
	app.Post("api/deleteproject/:id", routes.Delete_Project_func)
	app.Post("api/sendemail", routes.Create_Email_func)
	app.Get("api/getemails", routes.Get_Emails_func)
	app.Get("/check-auth", handlers.Check_Auth_func)
}

func main() {
	DB.Conn()

	app := fiber.New()
	Setup_Routes(app)
	app.Use(cors.New(cors.Config{
		AllowOrigins:     os.Getenv("API"),
		AllowMethods:     "GET,POST,PUT,DELETE",
		AllowHeaders:     "Content-Type,Authorization",
		AllowCredentials: true,
	}))
	app.Static("/assets", "./client/dist/assets", fiber.Static{
		Compress: true,
	})
	app.Get("*", func(c *fiber.Ctx) error {
		return c.SendFile(filepath.Join("./client/dist", "index.html"))
	})

	err2 := app.Listen(os.Getenv("PORT"))
	if err2 != nil {
		logger.Error("Error listening")
	}
}

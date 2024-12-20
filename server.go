package main

import (
	"os"
	"path/filepath"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"github.com/xDeFc0nx/logger-go-pkg"

	DB "github.com/xDeFc0nx/portofoilo/handlers"
	"github.com/xDeFc0nx/portofoilo/routes"
)

func Setup_Routes(app *fiber.App) {
	// app.Post("api/createuser", routes.CreateUser)
	app.Post("api/login", routes.Login_func)
	app.Post("api/logout", routes.Logout_func)
	app.Post("api/auth", routes.Auth_func)
	app.Get("api/getprojects", routes.Get_Projects)
	app.Get("api/getproject/:id", routes.Get_Project_by_Id)
	app.Post("api/createproject", routes.Create_Project)
	app.Post("api/deleteproject/:id", routes.Delete_Project)
}
func main() {

	err := godotenv.Load(".env")
	if err != nil {
		logger.Error("Error loading.env file")
	}
	_, err1 := DB.Connect()
	if err1 != nil {
		logger.Error("Failed to connect to database")

	}

	PORT := os.Getenv("PORT")

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOrigins:     "http://127.0.0.1:5173",
		AllowMethods:     "GET,POST,PUT,DELETE,OPTIONS",
	}))
	Setup_Routes(app)
	app.Static("/assets", "./client/dist/assets", fiber.Static{
		Compress: true, // optional: for gzip compression
	})
	app.Get("*", func(c *fiber.Ctx) error {
		return c.SendFile(filepath.Join("./client/dist", "index.html"))
	})

	err2 := app.Listen(PORT)
	if err2 != nil {
		logger.Error("Error listening")
	}

}

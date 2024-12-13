package handlers

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/xDeFc0nx/logger-go-pkg"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/xDeFc0nx/portofoilo/models"
)

func Connect() (*gorm.DB, error) {

	godotenv.Load(".env")

	dsn := os.Getenv("MYSQL_CONFIG")
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {

		return nil, err
	}

	logger.Success("Successfully connected to Database!")

	if err := db.AutoMigrate(

		&models.Projects{},
		&models.User{},
	); err != nil {
		return nil, err
	}
	logger.Success("Successfully Migrated!")

	return db, nil
}

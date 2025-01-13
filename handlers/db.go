package handlers

import (
	"os"

	"github.com/xDeFc0nx/logger-go-pkg"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/xDeFc0nx/portofoilo/models"
)

var DB *gorm.DB

func Conn() {
	var err error
	dsn := os.Getenv("DB_CONFIG")
	logger.Debug(dsn)
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return
	}

	logger.Success("Successfully connected to Database!")

	if err := DB.AutoMigrate(

		&models.Projects{},
		&models.User{},
		&models.Email{},
	); err != nil {
		return
	}
	logger.Success("Successfully Migrated!")
}

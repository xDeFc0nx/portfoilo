package handlers

import (
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"github.com/xDeFc0nx/logger-go-pkg"

	"github.com/xDeFc0nx/portofoilo/models"
)

func Create_JWT_Token(user models.User) (string, int64, error) {
	err := godotenv.Load(".env")
	if err != nil {
		logger.Error("Error loading.env file")
		os.Exit(1)
	}

	SECRET_KEY := os.Getenv("SECRET_KEY")
	exp := time.Now().Add(time.Minute * 30).Unix()
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["user_id"] = user.ID
	claims["exp"] = exp
	t, err := token.SignedString([]byte(SECRET_KEY))
	if err != nil {
		return "", 0, err
	}
	return t, exp, nil
}

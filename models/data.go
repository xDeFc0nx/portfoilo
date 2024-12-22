package models

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type Projects struct {
	gorm.Model
	Logo         string         `json:"Logo"`
	Title        string         `json:"Title"`
	Technologies pq.StringArray `json:"Technologies" gorm:"type:text[]"`
	Description  string         `json:"description"`
	Libraries    pq.StringArray `json:"libraries" gorm:"type:text[]"`
	Images       pq.StringArray `json:"images" gorm:"type:text[]"`
}

type User struct {
	ID       uint   `gorm:"primarykey"`
	Username string `gorm:"type:varchar(50);unique" json:"username"`
	Password string `json:"-"`
}

type Email struct {
	gorm.Model
	FullName string `json:"FullName"`
	Email    string `json:"Email"`
	Message  string `json:"Message"`
}

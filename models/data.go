package models

import (
	"gorm.io/gorm"
)

type Projects struct {
	gorm.Model
	Image        string `json:"image"`
	Title        string `json:"Title"`
	Description  string `json:"description"`
	Libraries    string `json:"libraries"`
	Technologies string `json:"technologies"`
	Details      string `json:"details"`
}

type User struct {
	ID       uint   `gorm:"primarykey"`
	Username string `gorm:"type:varchar(50);unique" json:"username"`
	Password string `json:"-"`
}

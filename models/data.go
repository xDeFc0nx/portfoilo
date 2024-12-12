package models

import "gorm.io/gorm"

type Projects struct {
	gorm.Model
	Image        string
	Title        string         `json:"name"`
	Description  string         `json:"description"`
	Libraries    []Libraries    `gorm:"many2many:project_libraries;"`
	Technologies []Technologies `gorm:"many2many:project_technologies;"`
	Details      string
}

type Libraries struct {
	gorm.Model
	LibName string `json:"name"`
}

type Technologies struct {
	gorm.Model
	TechName string `json:"name"`
}

type User struct {
	gorm.Model
	Username string `gorm:"type:varchar(50);unique" json:"username"`
	Password string `json:"-"`
}

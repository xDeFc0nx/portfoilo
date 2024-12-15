package main

import (
	"os"
	"os/exec"
	"testing"

	"github.com/xDeFc0nx/logger-go-pkg"
)

func TestClient(t *testing.T) {
	// Change to the /client directory
	err := os.Chdir("./client")
	if err != nil {
		t.Fatalf("Failed to change directory to /client: %v", err)
	}

	// Run the npm test-all command
	cmd := exec.Command("npm", "run", "test-all")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	cmd1 := exec.Command("golangci-lint", "run")
	cmd1.Stdout = os.Stdout
	cmd1.Stderr = os.Stderr

	// Run the command and check for errors
	err = cmd.Run()
	if err != nil {
		t.Fatalf("client Failed checks %v", err)
	}

	// Change back to the original directory
	err = os.Chdir("../")
	if err != nil {
		t.Fatalf("Failed to change directory to ../: %v", err)
	}

	// Run the golangci-lint command
	err = cmd1.Run()
	if err != nil {
		t.Fatalf("Server Failed checks %v", err)
	}

	// Log success
	logger.Success("")
}

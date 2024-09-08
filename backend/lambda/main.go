package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
)

type MyEvent struct {
	Username string `json:"username"`
}

// Handle payload for lambda
func HandleRequest(event MyEvent) (string, error) {
	if event.Username == "" {
		return "", fmt.Errorf("username is empty")
	}

	return fmt.Sprintf("Successfully called by %s", event.Username), nil
}

func main() {
	lambda.Start(HandleRequest)
}

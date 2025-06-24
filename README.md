# Email API

A lightweight Express-based API server written in TypeScript for sending emails via Gmail.  
This API accepts `user_name`, `user_email`, and `message` as input and sends an email to a predefined Gmail account. It responds with either a success or failure status.

## Features

- Built with Express and TypeScript
- Handles CORS and JSON requests
- Sends email using Nodemailer
- Environment variable support via dotenv
- Dev-friendly setup with `ts-node-dev`

## Installation

Follow these steps to clone and set up the project:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/email-api.git
cd email-api

# 2. Initialize a Git repository (if not already cloned)
git init

# 3. Initialize Yarn project (or use another package manager)
yarn init -y

# 4. Install dependencies
yarn install
```
## Environment Variables
Create a `.env` file in the root directory with the following variables in `.env.example`
_Note: Use an App Password if you're using Gmail with 2FA._

## Usage
Run the development server:

```bash
yarn dev
```

Make a POST request to http://localhost:3001/api/sendEmail with a JSON body:

```json
{
  "user_name": "John Doe",
  "user_email": "john@example.com",
  "message": "Hello! I'm have message for you."
}
```

## Response
`200 OK` : Email sent succesfully and return `success = true`.

`500 Internal Server Error` : Failed to send email and return `success = false`

##
Feel free to contribute or customize this API for your project needs.
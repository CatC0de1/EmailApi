# Ziymailer

A lightweight Express-based API server written in TypeScript for sending emails via Gmail.
This API accepts `JSON` as input and sends an email to a predefined Gmail account. It responds with either a success or failure status.

---

## Features

- Built with [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/)
- Email template built with [Handlebars](https://handlebarsjs.com/)
- Handles CORS and JSON requests
- Sends email using Nodemailer
- Using rate limiter (5 per use within 1 minute)
- Validator JSON input

---

## How to Use

Health check:
```HTTP
GET https://stmp-api.onrender.com/health
```

Health check are used to check the API is online. It will response `200 OK`.

Make a request to:
```HTTP
POST https://stmp-api.onrender.com/api/send-email/public 
```

with a JSON body:
```json
{
  "user_name_sender": "Sender Name",
  "user_email_sender": "sender@example.com",
  "message": "This field content value of email message",
  "user_name_receiver": "Target Name",
  "user_email_receiver": "target@example.com"
}
```

Field Reqruietment:

|       Field       |Required| Type |
|-------------------|--------|------|
|user_name_sender   |  true  |string|
|user_email_sender  |  true  |email |
|message            |  true  |string|
|user_name_receiver |  true  |string|
|user_email_receiver|  true  |email |

Note: **another fields outside of recruitmen are not allowed!*

---

## Response
`200 OK` : Email sent succesfully and return:
```JSON
{
  "success": true
}
```

`500 Internal Server Error` : Failed to send email and return:
```JSON
{
  "success": false,
  "error": [
    {
      "field": "field name",
      "message": "error validation"
    }
  ]
}
```

---

## Stay in Touch

Author : Iyan Zuli Armanda

- Instagram: [@iyan_zul1](https://www.instagram.com/iyan_zul1/#)
- LinkedIn: [iyan zuli armanda](https://www.linkedin.com/in/iyan-zuli-armanda-8a1383296/)
- Website: [iyan-zuli-armanda.netlify.app](https://iyan-zuli-armanda.netlify.app/)

---

## License


Ziymail is [MIT licensed](https://github.com/CatC0de1/EmailApi?tab=MIT-1-ov-file)

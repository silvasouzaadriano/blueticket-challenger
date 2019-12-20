define({ "api": [
  {
    "type": "get",
    "url": "/events/:id",
    "title": "Request Event",
    "name": "EventController_show",
    "group": "Events",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Localização do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Data do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Owner",
            "description": "<p>Criado do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "past",
            "description": "<p>Parâmetro que mostra se o evento já passou ou não.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "cancelable",
            "description": "<p>Parâmetro que mostra se o evento pode ser cancelado ou não.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "canceled_at",
            "description": "<p>Data de cancelamento do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "banner",
            "description": "<p>Objeto que mostra id, url e path do evento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Example):",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"2\",\n  \"title\": \"Vue.js summit 2019\",\n  \"description\": \"O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\\n\",\n  \"location\": \"São Paulo/SP - Av. Paulista, 1234\",\n  \"date\": \"2019-12-20T21:00:00.000Z\",\n  \"owner\": {\n    \"id\": 1,\n    \"name\": \"Adriano Souza\",\n    \"avatar\": {\n      \"url\": \"http://localhost:3333/files/07af4515d5c29250d329492a4167b3d0.jpg\",\n      \"id\": 1,\n      \"path\": \"07af4515d5c29250d329492a4167b3d0.jpg\"\n    }\n  },\n  \"past\": false,\n  \"cancelable\": true,\n  \"canceled_at\": null,\n  \"banner\": {\n    \"url\": \"http://localhost:3333/files/665745fb5f90a3fdf2ef7a3edc2ad419.jpeg\",\n    \"id\": 2,\n    \"path\": \"665745fb5f90a3fdf2ef7a3edc2ad419.jpeg\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Events"
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "Signin",
    "name": "authCreateSession",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail válido do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha secreta do usuário (6-10 caracteres).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request (Exemplo)",
          "content": "{\n  \"email\": \"joao@gmail.com\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contendo o id, nome, e-mail e avatar do usuário (id, url e path do imagem).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token do usuário baseado em senha criptografada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Exemplo)",
          "content": "HTTP/1.1 201 OK\n{\n   \"user\": {\n     \"id\": 3,\n     \"name\": \"João de Deus\",\n     \"email\": \"joao@gmail.com\",\n     \"avatar\": {\n       \"url\": \"http://localhost:3333/files/07af4515d5c29250d329492a4167b3d0.jpg\",\n       \"id\": 1,\n        \"path\": \"07af4515d5c29250d329492a4167b3d0.jpg\"\n     }\n   },\n   \"token\": \"yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTc2ODA0MjQ5LCJleHAiOjE1Nzc0MDkwNDl9.YleBKQJcJsGVXrivKfkyNK6QN4p7H4QBlCqEFUVtrXg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Signup",
    "name": "createUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail válido do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha secreta do usuário (6-10 caracteres).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request (Exemplo)",
          "content": "    {\n\t     \"name\": \"João de Deus\",\n      \"email\": \"joao@gmail.com\",\n      \"password\": \"123456\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contendo o id, nome, e-mail e avatar do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token do usuário baseado em senha criptografada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Exemplo)",
          "content": "HTTP/1.1 201 OK\n{\n   \"user\": {\n     \"id\": 3,\n     \"name\": \"João de Deus\",\n     \"email\": \"joao@gmail.com\",\n     \"avatar\": null\n   },\n   \"token\": \"yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTc2ODA0MjQ5LCJleHAiOjE1Nzc0MDkwNDl9.YleBKQJcJsGVXrivKfkyNK6QN4p7H4QBlCqEFUVtrXg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Users"
  }
] });

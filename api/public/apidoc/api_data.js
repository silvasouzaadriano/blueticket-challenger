define({ "api": [
  {
    "type": "post",
    "url": "events",
    "title": "Create a new event",
    "name": "events",
    "group": "Event_Creation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Nome do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Localização do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Data do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Criador do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner_id",
            "description": "<p>Banner do evento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request (Exemplo)",
          "content": "{\n\t  \"title\": \"Vue.js summit 2019\",\n\t  \"description\": \"O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\\n\",\n\t  \"location\": \"São Paulo/SP - Av. Paulista, 1234\",\n\t  \"date\": \"2019-12-28T18:00:00-03:00\",\n\t  \"owner_id\": 1,\n\t  \"banner_id\": 4\n}",
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
            "description": "<p>Objeto contendo o past, cancelable, id, title, description, location, date, owner_id, banner_id. updatedAt, createdAt, canceled_At</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Exemplo)",
          "content": "{\n   \"past\": false,\n   \"cancelable\": true,\n   \"id\": 5,\n   \"title\": \"Vue.js summit 2019\",\n   \"description\": \"O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\\n\",\n   \"location\": \"São Paulo/SP - Av. Paulista, 1234\",\n   \"date\": \"2019-12-28T21:00:00.000Z\",\n   \"owner_id\": 51,\n   \"banner_id\": 4,\n   \"updatedAt\": \"2019-12-23T12:40:17.685Z\",\n   \"createdAt\": \"2019-12-23T12:40:17.685Z\",\n   \"canceled_at\": null\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Event_Creation"
  },
  {
    "type": "delete",
    "url": "events/:id",
    "title": "Delete an event",
    "name": "events",
    "group": "Event_Deletion",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response (Example):",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Event_Deletion"
  },
  {
    "type": "get",
    "url": "events/:id",
    "title": "Show a single event",
    "name": "events",
    "group": "Event_Show",
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
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"multipart/form-data\"\"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Event_Show"
  },
  {
    "type": "put",
    "url": "events",
    "title": "Update an Event",
    "name": "events",
    "group": "Event_update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Nome do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Localização do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Data do evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner_id",
            "description": "<p>Banner do evento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request (Exemplo)",
          "content": "{\n\t  \"banner_id\": 2,\n\t  \"title\": \"Vue.js summit 2019\",\n\t  \"description\": \"O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\",\n\t  \"location\": \"São Paulo/SP - Av. Paulista, 1234\",\n\t  \"date\": \"2019-12-27T11:00:00-03:00\"\n}",
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
            "description": "<p>Objeto contendo o past, cancelable, id, title, description, location, date, owner_id, banner_id. updatedAt, createdAt, canceled_At</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Exemplo)",
          "content": "{\n   \"past\": false,\n   \"cancelable\": true,\n   \"id\": 5,\n   \"title\": \"Vue.js summit 2019\",\n   \"description\": \"O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\\n\",\n   \"location\": \"São Paulo/SP - Av. Paulista, 1234\",\n   \"date\": \"2019-12-28T21:00:00.000Z\",\n   \"owner_id\": 51,\n   \"banner_id\": 4,\n   \"updatedAt\": \"2019-12-23T12:40:17.685Z\",\n   \"createdAt\": \"2019-12-23T12:40:17.685Z\",\n   \"canceled_at\": null\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Event_update"
  },
  {
    "type": "get",
    "url": "events",
    "title": "List of events",
    "name": "events",
    "group": "Events_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Nome do evento.</p>"
          }
        ],
        "query string": [
          {
            "group": "query string",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Data do evento para pesquisa no formato YYYY-MM-DD</p>"
          },
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": "<p>Valor fixo = just-my-events para trazer somente os eventos do usuário logado</p>"
          }
        ]
      }
    },
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
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Events_List"
  },
  {
    "type": "post",
    "url": "files",
    "title": "Avatar/Banner Creation",
    "name": "files",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Nome do arquivo (ex.: 'example/vuejs.jpeg')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo do arquivo. Valores válidos: avatar ou banner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request (Exemplo)",
          "content": "     [\n\t\t\t\t{\n\t\t\t  \t\"name\": \"file\",\n\t\t\t\t\t\"value\": \"\"\n\t\t\t\t},\n\n       {\n\t\t\t\t\t\"name\": \"type\",\n\t\t\t\t\t\"value\": \"banner\"\n\t\t\t\t}\n\t\t\t]",
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
            "description": "<p>Objeto contendo o id, name, path, type, url, updateAt, createAt</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Exemplo)",
          "content": "HTTP/1.1 201 OK\n {\n    \"url\": \"http://localhost:3333/files/b3f82f929f0c90e89f6c2534799ad2a4.jpg\",\n    \"id\": 5,\n    \"name\": \"Adriano_Souza.jpg\",\n    \"path\": \"b3f82f929f0c90e89f6c2534799ad2a4.jpg\",\n    \"type\": \"avatar\",\n    \"updatedAt\": \"2019-12-23T14:15:18.722Z\",\n    \"createdAt\": \"2019-12-23T14:15:18.722Z\"\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"multipart/form-data\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "sessions/",
    "title": "User authentication",
    "name": "sessions",
    "group": "User_and_Session",
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
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "User_and_Session"
  },
  {
    "type": "post",
    "url": "users/",
    "title": "Create new user",
    "name": "users",
    "group": "User_and_Session",
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
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "User_and_Session"
  },
  {
    "type": "put",
    "url": "users/",
    "title": "User update",
    "name": "users",
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
            "field": "oldPassword",
            "description": "<p>Atual Senha secreta do usuário (6-10 caracters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova ou Atual Senha secreta do usuário (6-10 caracteres).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "configrmPassword",
            "description": "<p>Confirmação da Nova ou Atual Senha secreta do usuário (6-10 caracteres).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar_id",
            "description": "<p>ID válido da image(avatar) do usuário. O registro deve ser do tipo: avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request (Exemplo)",
          "content": "    {\n\t     \"name\": \"Adriano Souza\",\n      \"email\": \"demo@gmail.com\",\n      \"oldPassword\": \"123456\",\n\t     \"password\": \"123456\",\n      \"confirmPassword\": \"123456\",\n\t     \"avatar_id\": 3\n    }",
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
            "type": "Object",
            "optional": false,
            "field": "avatar",
            "description": "<p>OBjecto contendo o id, url e path do avatar do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Exemplo)",
          "content": "{\n  \"id\": 51,\n  \"name\": \"Adriano Souza\",\n  \"email\": \"demo@gmail.com\",\n  \"avatar\": {\n     \"url\": \"http://localhost:3333/files/b3f82f929f0c90e89f6c2534799ad2a4.jpg\",\n     \"id\": 5,\n     \"path\": \"b3f82f929f0c90e89f6c2534799ad2a4.jpg\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "     [\n       {\n\t\t\t    \"name\": \"Content-Type\",\n\t\t\t    \"value\": \"application/json\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t    \"name\": \"Authorization\",\n\t\t\t    \"value\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U\"\n       }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Users"
  }
] });

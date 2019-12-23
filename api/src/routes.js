import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

/* MIDDLEWARES */
import { authMiddleware, authCreateSession } from './app/middlewares/auth';
import { createUser, updateUser } from './app/middlewares/UserMiddleware';
import { createEvent, updateEvent } from './app/middlewares/EventMiddleware';

/* CONTROLLERS */
import FileController from './app/controllers/FileController';
import EventController from './app/controllers/EventController';

const routes = new Router();
const uploads = multer(multerConfig);

/* USER AND SESSION */
/**
 * @api {post} users/ Create new user
 * @apiName users
 * @apiGroup User and Session
 *
 * @apiParam {String} name Nome do usuário.
 * @apiParam {String} email E-mail válido do usuário.
 * @apiParam {String} password Senha secreta do usuário (6-10 caracteres).
 *
 * @apiSuccess {Object} user Objeto contendo o id, nome, e-mail e avatar do usuário.
 * @apiSuccess {String} token Token do usuário baseado em senha criptografada.
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiParamExample {json} Request (Exemplo)
 *     {
 *	     "name": "João de Deus",
 *       "email": "joao@gmail.com",
 *       "password": "123456"
 *     }
 *
 * @apiSuccessExample {json} Response (Exemplo)
 *    HTTP/1.1 201 OK
 *    {
 *       "user": {
 *         "id": 3,
 *         "name": "João de Deus",
 *         "email": "joao@gmail.com",
 *         "avatar": null
 *       },
 *       "token": "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTc2ODA0MjQ5LCJleHAiOjE1Nzc0MDkwNDl9.YleBKQJcJsGVXrivKfkyNK6QN4p7H4QBlCqEFUVtrXg"
 *    }
 */
routes.post('/users', createUser, UserController.store);

/**
 *
 * @api {post} sessions/ User authentication
 * @apiName sessions
 * @apiGroup User and Session
 *
 * @apiParam {String} email E-mail válido do usuário.
 * @apiParam {String} password Senha secreta do usuário (6-10 caracteres).
 *
 * @apiSuccess {Object} user Objeto contendo o id, nome, e-mail e avatar do usuário (id, url e path do imagem).
 * @apiSuccess {String} token Token do usuário baseado em senha criptografada.
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiParamExample {json} Request (Exemplo)
 *     {
 *       "email": "joao@gmail.com",
 *       "password": "123456"
 *     }
 *
 * @apiSuccessExample {json} Response (Exemplo)
 *    HTTP/1.1 201 OK
 *    {
 *       "user": {
 *         "id": 3,
 *         "name": "João de Deus",
 *         "email": "joao@gmail.com",
 *         "avatar": {
 *           "url": "http://localhost:3333/files/07af4515d5c29250d329492a4167b3d0.jpg",
 *           "id": 1,
 *            "path": "07af4515d5c29250d329492a4167b3d0.jpg"
 *         }
 *       },
 *       "token": "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTc2ODA0MjQ5LCJleHAiOjE1Nzc0MDkwNDl9.YleBKQJcJsGVXrivKfkyNK6QN4p7H4QBlCqEFUVtrXg"
 *    }
 */
routes.post('/sessions', authCreateSession, SessionController.store);

routes.use(authMiddleware);

/* USER */

/**
 *
 * @api {put} users/ User update
 * @apiName users
 * @apiGroup Users
 *
 * @apiParam {String} name Nome do usuário.
 * @apiParam {String} email E-mail válido do usuário.
 * @apiParam {String} oldPassword Atual Senha secreta do usuário (6-10 caracters)
 * @apiParam {String} password Nova ou Atual Senha secreta do usuário (6-10 caracteres).
 * @apiParam {String} configrmPassword Confirmação da Nova ou Atual Senha secreta do usuário (6-10 caracteres).
 * @apiParam {String} avatar_id ID válido da image(avatar) do usuário. O registro deve ser do tipo: avatar
 *
 * @apiSuccess {Object} user Objeto contendo o id, nome, e-mail e avatar do usuário.
 * @apiSuccess {Object} avatar OBjecto contendo o id, url e path do avatar do usuário
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiParamExample {json} Request (Exemplo)
 *     {
 *	     "name": "Adriano Souza",
 *       "email": "demo@gmail.com",
 *       "oldPassword": "123456",
 *	     "password": "123456",
 *       "confirmPassword": "123456",
 *	     "avatar_id": 3
 *     }
 *
 * @apiSuccessExample {json} Response (Exemplo)
 *     {
 *       "id": 51,
 *       "name": "Adriano Souza",
 *       "email": "demo@gmail.com",
 *       "avatar": {
 *          "url": "http://localhost:3333/files/b3f82f929f0c90e89f6c2534799ad2a4.jpg",
 *          "id": 5,
 *          "path": "b3f82f929f0c90e89f6c2534799ad2a4.jpg"
 *       }
 *     }
 *
 */
routes.put('/users', updateUser, UserController.update);/* FILES */
/**
 * @api {post} files Avatar/Banner Creation
 * @apiName files
 * @apiGroup Files
 *
 * @apiParam {String} file  Nome do arquivo (ex.: 'example/vuejs.jpeg')
 * @apiParam {String} type  Tipo do arquivo. Valores válidos: avatar ou banner
 *
 * @apiSuccess {Object} user Objeto contendo o id, name, path, type, url, updateAt, createAt
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "multipart/form-data"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiParamExample {json} Request (Exemplo)
 *      [
 *				{
 *			  	"name": "file",
 *					"value": ""
 *				},
 *
 *        {
 *					"name": "type",
 *					"value": "banner"
 *				}
 *			]
 *
 * @apiSuccessExample {json} Response (Exemplo)
 *    HTTP/1.1 201 OK
 *     {
 *        "url": "http://localhost:3333/files/b3f82f929f0c90e89f6c2534799ad2a4.jpg",
 *        "id": 5,
 *        "name": "Adriano_Souza.jpg",
 *        "path": "b3f82f929f0c90e89f6c2534799ad2a4.jpg",
 *        "type": "avatar",
 *        "updatedAt": "2019-12-23T14:15:18.722Z",
 *        "createdAt": "2019-12-23T14:15:18.722Z"
 *     }
 */
routes.post('/files', uploads.single('file'), FileController.store);

/** Events */
/**
 * @api {post} events Create a new event
 * @apiName events
 * @apiGroup Event Creation
 *
 * @apiParam {String} title Nome do evento.
 * @apiParam {String} description Descrição do evento.
 * @apiParam {String} location Localização do evento.
 * @apiParam {String} date Data do evento.
 * @apiParam {String} location Localização do evento.
 * @apiParam {String} owner_id Criador do evento.
 * @apiParam {String} banner_id Banner do evento.
 *
 * @apiSuccess {Object} user Objeto contendo o past, cancelable, id, title, description, location, date, owner_id, banner_id. updatedAt, createdAt, canceled_At
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiParamExample {json} Request (Exemplo)
 *     {
 *     	  "title": "Vue.js summit 2019",
 *     	  "description": "O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n",
 *     	  "location": "São Paulo/SP - Av. Paulista, 1234",
 *     	  "date": "2019-12-28T18:00:00-03:00",
 *     	  "owner_id": 1,
 *     	  "banner_id": 4
 *     }
 *
 * @apiSuccessExample {json} Response (Exemplo)
 *     {
 *        "past": false,
 *        "cancelable": true,
 *        "id": 5,
 *        "title": "Vue.js summit 2019",
 *        "description": "O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n",
 *        "location": "São Paulo/SP - Av. Paulista, 1234",
 *        "date": "2019-12-28T21:00:00.000Z",
 *        "owner_id": 51,
 *        "banner_id": 4,
 *        "updatedAt": "2019-12-23T12:40:17.685Z",
 *        "createdAt": "2019-12-23T12:40:17.685Z",
 *        "canceled_at": null
 *      }
 */
routes.post('/events', createEvent, EventController.store);

/**
 * @api {put} events Update an Event
 * @apiName events
 * @apiGroup Event update
 *
 *
 * @apiParam {String} title Nome do evento.
 * @apiParam {String} description Descrição do evento.
 * @apiParam {String} location Localização do evento.
 * @apiParam {String} date Data do evento.
 * @apiParam {String} location Localização do evento.
 * @apiParam {String} banner_id Banner do evento.
 *
 * @apiSuccess {Object} user Objeto contendo o past, cancelable, id, title, description, location, date, owner_id, banner_id. updatedAt, createdAt, canceled_At
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiParamExample {json} Request (Exemplo)
 *     {
 *     	  "banner_id": 2,
 *     	  "title": "Vue.js summit 2019",
 *     	  "description": "O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.",
 *     	  "location": "São Paulo/SP - Av. Paulista, 1234",
 *     	  "date": "2019-12-27T11:00:00-03:00"
 *     }
 *
 * @apiSuccessExample {json} Response (Exemplo)
 *     {
 *        "past": false,
 *        "cancelable": true,
 *        "id": 5,
 *        "title": "Vue.js summit 2019",
 *        "description": "O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n",
 *        "location": "São Paulo/SP - Av. Paulista, 1234",
 *        "date": "2019-12-28T21:00:00.000Z",
 *        "owner_id": 51,
 *        "banner_id": 4,
 *        "updatedAt": "2019-12-23T12:40:17.685Z",
 *        "createdAt": "2019-12-23T12:40:17.685Z",
 *        "canceled_at": null
 *      }
 */
routes.put('/events/:id', updateEvent, EventController.update);

/**
 * @api {delete} events/:id Delete an event
 * @apiName events
 * @apiGroup Event Deletion
 *
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiSuccessExample {json} Response (Example):
 *    HTTP/1.1 200 OK
 */
routes.delete('/events/:id', EventController.delete);


/**
 * @api {get} events/:id Show a single event
 * @apiName events
 * @apiGroup Event Show
 *
 *
 * @apiSuccess {Number} id ID único do evento.
 * @apiSuccess {String} title Título do evento.
 * @apiSuccess {String} location Localização do evento.
 * @apiSuccess {String} date Data do evento.
 * @apiSuccess {Object} Owner Criado do evento.
 * @apiSuccess {Boolean} past Parâmetro que mostra se o evento já passou ou não.
 * @apiSuccess {Boolean} cancelable Parâmetro que mostra se o evento pode ser cancelado ou não.
 * @apiSuccess {String} canceled_at Data de cancelamento do evento.
 * @apiSuccess {Object} banner Objeto que mostra id, url e path do evento.
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "multipart/form-data""value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiSuccessExample {json} Response (Example):
 *    HTTP/1.1 200 OK
 *   {
 *     "id": "2",
 *     "title": "Vue.js summit 2019",
 *     "description": "O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n",
 *     "location": "São Paulo/SP - Av. Paulista, 1234",
 *     "date": "2019-12-20T21:00:00.000Z",
 *     "owner": {
 *       "id": 1,
 *       "name": "Adriano Souza",
 *       "avatar": {
 *         "url": "http://localhost:3333/files/07af4515d5c29250d329492a4167b3d0.jpg",
 *         "id": 1,
 *         "path": "07af4515d5c29250d329492a4167b3d0.jpg"
 *       }
 *     },
 *     "past": false,
 *     "cancelable": true,
 *     "canceled_at": null,
 *     "banner": {
 *       "url": "http://localhost:3333/files/665745fb5f90a3fdf2ef7a3edc2ad419.jpeg",
 *       "id": 2,
 *       "path": "665745fb5f90a3fdf2ef7a3edc2ad419.jpeg"
 *     }
 *   }
 */
routes.get('/events/:id', EventController.show);

/**
 * @api {get} events List of events
 * @apiName events
 * @apiGroup Events List
 *
 * @apiParam {String} title Nome do evento.
 * @apiParam (query string) {date} date Data do evento para pesquisa no formato YYYY-MM-DD
 * @apiParam (query string) {string} where Valor fixo = just-my-events para trazer somente os eventos do usuário logado
 *
 * @apiSuccess {Number} id ID único do evento.
 * @apiSuccess {String} title Título do evento.
 * @apiSuccess {String} location Localização do evento.
 * @apiSuccess {String} date Data do evento.
 * @apiSuccess {Object} Owner Criado do evento.
 * @apiSuccess {Boolean} past Parâmetro que mostra se o evento já passou ou não.
 * @apiSuccess {Boolean} cancelable Parâmetro que mostra se o evento pode ser cancelado ou não.
 * @apiSuccess {String} canceled_at Data de cancelamento do evento.
 * @apiSuccess {Object} banner Objeto que mostra id, url e path do evento.
 *
 * @apiHeaderExample {json} Header-Example:
 *      [
 *        {
 *			    "name": "Content-Type",
 *			    "value": "application/json"
 *			  },
 *			  {
 *			    "name": "Authorization",
 *			    "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTU3NzA5NTM2NCwiZXhwIjoxNTc3NzAwMTY0fQ.Gqaaqj39Pkk9m1HEPzpi-ZOgchZqoUCfao9Ei_IUf8U"
 *        }
 *      ]
 *
 * @apiSuccessExample {json} Response (Example):
 *    HTTP/1.1 200 OK
 *   {
 *     "id": "2",
 *     "title": "Vue.js summit 2019",
 *     "description": "O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n",
 *     "location": "São Paulo/SP - Av. Paulista, 1234",
 *     "date": "2019-12-20T21:00:00.000Z",
 *     "owner": {
 *       "id": 1,
 *       "name": "Adriano Souza",
 *       "avatar": {
 *         "url": "http://localhost:3333/files/07af4515d5c29250d329492a4167b3d0.jpg",
 *         "id": 1,
 *         "path": "07af4515d5c29250d329492a4167b3d0.jpg"
 *       }
 *     },
 *     "past": false,
 *     "cancelable": true,
 *     "canceled_at": null,
 *     "banner": {
 *       "url": "http://localhost:3333/files/665745fb5f90a3fdf2ef7a3edc2ad419.jpeg",
 *       "id": 2,
 *       "path": "665745fb5f90a3fdf2ef7a3edc2ad419.jpeg"
 *     }
 *   }
 */
routes.get('/events', EventController.index);

export default routes;

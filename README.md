<h1 align="center">
    Blueticket challenger
</h1>


## A challenger for [Blueticket FullStack Developer](https://blueticket.recruiterbox.com/jobs/fk03azc/) 

## Concepts

<h4>
On this challenger was implemented an API REST where is possible to authenticate users. These users also may create new events.
Also was created an web interface where may be done the user creation and the event management.
The API was created using NodeJS and the web interface was built using ReactJS.
</h4>


## Requirements

1. Only an user logged may create and edit your onwn events
2. An event created my be published or not (changing it visibility)
3. An event published became visible on general event list
4. An event only may be published with all attributes bellow fullfilled:
    - Name
    - Description
    - Bannner

    NOTE that despite of fields name, description and banner, also were introduced two more fields: event date and location. The event date is being used on frontend as paging.

## Main Technologies used

### BACK-END
-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [nodemon](https://nodemon.io/)
-   [Sucrase](https://github.com/alangpierce/sucrase)
-   [Docker](https://www.docker.com/docker-community)
-   [Sequelize](http://docs.sequelizejs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [node-postgres](https://www.npmjs.com/package/pg)
-   [JWT](https://jwt.io/)
-   [Multer](https://github.com/expressjs/multer)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Youch](https://www.npmjs.com/package/youch)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Bee Queue](https://www.npmjs.com/package/bcrypt)
-   [Nodemailer](https://nodemailer.com/about/)
-   [date-fns](https://date-fns.org/)
-   [Sentry](https://sentry.io/)
-   [DotEnv](https://www.npmjs.com/package/dotenv)
-   [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 

### FRONT-END
-   [ReactJS](https://reactjs.org/)
-   [Create React App Configuration Override](https://github.com/sharegate/craco)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [React Router v4](https://github.com/ReactTraining/react-router)
-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [History](https://www.npmjs.com/package/history)
-   [Immer](https://github.com/immerjs/immer)
-   [Polished](https://polished.js.org/)
-   [React-Toastify](https://fkhadra.github.io/react-toastify/)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [react-perfect-scrollbar](https://github.com/OpusCapita/react-perfect-scrollbar)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)
-   [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)



## How To Use

To clone and run this application, you'll need [Docker](https://docs.docker.com/),  [Git](https://git-scm.com), [Node.js v10.16.1](https://nodejs.org/en/) or higher + [Yarn v1.19.1](https://yarnpkg.com/lang/en/) (The yarn one is optional once you might run the steps using npm and npx) or higher installed on your computer. 

### Install Backend
```bash
# Clone this repository
$ git clone https://github.com/silvasouzaadriano/blueticket-challenger.git

# Go into the repository
$ cd blueticket-challenger/api

# Install dependencies
$ yarn install OR npm run install

# Created Postgree Docker container
$ docker run --name blueticket_database -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=blueticket -p 5432:5432 -d postgres

# .env
$ Replace the .env.EXAMPLE to .env

# Run Migrates
$ yarn sequelize db:migrate OR npx sequelize db:migrate

# Run Seeds (This step is optional once its possible create the records manually by web applicatiob)
$ yarn seed OR npx sequelize db:seed:all

# Run Tests (Note that this item is optional to bem ran)
$ yarn pretest OR npx NODE_ENV=test sequelize db:migrate
$ yarn test OR NODE_ENV=test jest --sourceMap=false --verbose
$ yarn posttest OR npx NODE_ENV=test sequelize db:migrate:undo:all

# Run the API
$ yarn dev OR npm run dev
```

### Install Frontend
```bash

# Go into the front path
$ cd blueticket-challenger/frontend

# Install dependencies
$ yarn install OR npm run install

# Run the Front
$ yarn start OR npm run start
```

## API documentation
```bash

The documentation was generated on folder public/api. In order to check it, open on browser the file index.html from this folder.
```

Made with ♥ by Adriano Souza :wave: [Get in touch!](https://www.linkedin.com/in/adriano-souza-9b1a1b11)



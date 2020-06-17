# Nodejs_restapi

Simple Restful API

## Install all dependencies

```
  yarn
```

## Config Postgres:

.env:

```
DATABASE_URL="postgressql://{USER}:{PASSWORD]@{HOST}:{PORT_DB}/{NAME_DB}"
PORT=3000
```

### Build auto-increment :

<p align="center">
  <img width="800" height="500" src="https://github.com/YonathanGuez/Nodejs_restapi/blob/master/img/config_auto_incre.png">
</p>

### Export DB from Pgadmin4:

```
Backup> - Format "Plan"
        - Encoding "UTF8"
        - Role name "Postgres"
```

## Postman :

add collection app_user.postman_collection.json

## Action RESTFUL API :

```
yarn start
```

http://localhost:3000/api/users/createuser </br>
http://localhost:3000/api/users/login </br>
http://localhost:3000/api/users/updatepayment </br>

## Initialisation Db with knex an other way to use Postgres

db/init.js call config.js

```
node db\init.js
```

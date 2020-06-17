# Nodejs_restapi

Simple Restful API with PostgreSQL:

- Create
- Login
- Delete
- Update
- Script Test API End Point: jest

We will use PostgreSQL Manually or with automation script

## Install all dependencies

```
  yarn
```

## Config Postgres:

.env:

```
DATABASE_URL="postgressql://{USER}:{PASSWORD]@{HOST}:{PORT_DB}/{NAME_DB}"
USER_DB="{USER}"
PORT=3000
```

### Installing DB:

#### How to Use Postgresql Automation Tables:

I put a model of my db in db/db.sql
init.js will change the username and run this into your postgres

Run :

```
yarn createdb
```

#### How to Use Postgresql Manually :

##### Build auto-increment :

<p align="center">
  <img width="800" height="500" src="https://github.com/YonathanGuez/Nodejs_restapi/blob/master/img/config_auto_incre.png">
</p>

##### Build Contraint like Unique :

<p align="center">
  <img width="800" height="500" src="https://github.com/YonathanGuez/Nodejs_restapi/blob/master/img/add_contraint_unique.png">
</p>

##### Clean a table or DB :

<p align="center">
  <img width="800" height="500" src="https://github.com/YonathanGuez/Nodejs_restapi/blob/master/img/clean_tables_truncate.png">
</p>

#### Export DB from Pgadmin4:

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
http://localhost:3000/api/users/deleteuser </br>
http://localhost:3000/api/users/updatepayment </br>

## Test API End Point With jest

```
yarn test
```

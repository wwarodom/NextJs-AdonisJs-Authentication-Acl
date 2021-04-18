# NextJs + AdonisJs Authentication Acl

## MariaDB (mysql driver)
Deploy mariaDB on docker container 
```
cd docker
docker-compose up -d mariadb
```

Add mysql user and grant privileges:
```
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'database_user'@'localhost';
```

## Backend
Install AdonisJS dependency
```
cd  ..\back
npm i
```

Please config .env from .env.example

Setup AdonisJS
```
adonis key:generate
adonis migration:run
adonis migration:status
adonis seed
adonis serve --dev
adonis route:list
```

## Frontend
Setup NextJS:
```
cd ../front
npm i
npm run dev
```

Modify from: [https://github.com/Zapodask/Nextjs-Adonisjs_auth-acl]
## Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute 'npm install' on the same path of your root directory of the downloaded project
- Create a '.env' file in the root directory and add the following environment variable
    -'PORT=3000'
- Inside 'src/config' folder create a new file 'config.json' and then add the following piece of json

```
{
  "development": {
    "username": <Your_database_login_name>,
    "password": <Your_database_password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've done above listed steps, go to the src folder from terminal and execute `npx sequelize db:create` an then execute `npx sequelize db:migrate` to create the database and migrate the schema

## DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

## Flights Table
  - A flight belongs to an airline but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

  ## Tables
  
  ### City--> id , name , created_at , updated_at
  ### Airport--> id , name , address , city_id , created_at , updated_at
      Relationship--> City has many airports and airport belongs to a city(one to many)
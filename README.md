## Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute 'npm install' on the same path of your root directory of the downloaded project
- Create a '.env' file in the root directory and add the following environment variable
    -'PORT=3000'
- Inside 'src/config' folder create a new file 'config.json' and then add the following piece of json

...
{
  "development": {
    "username": <Your_database_login_name>,
    "password": <Your_database_password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
...
- Once you've done above listed steps, go to the src folder from terminal and execute 'npx sequelize db:create'

## DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight belongs to an airline but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

## Flights Table
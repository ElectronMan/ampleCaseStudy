# Ample Case Study
> Scaling Chalmers

​Chalmers is looking to expand and pilot in major cities in North America (New York City, Los Angeles, San Francisco, etc.) in order to do so, we will have many data sources (API’s, JSON files, CSV’s, etc.) from different cities we currently don’t have a database to house this data and are looking to create one. How would you go about creating this database?

## Installing / Getting started

A quick introduction of the minimal setup you need to get up and
running.

```shell
git clone https://github.com/ElectronMan/ampleCaseStudy.git
cd ampleCaseStudy/
npm install
npm run start
```

### Initial Configuration

You need to have a mongodb instance running.

For instructions on how to install and run mongodb follow this link https://docs.mongodb.com/manual/administration/install-community/

For Mac I just ran
```shell
brew tap mongodb/brew
brew install mongodb-community@4.2
brew services start mongodb-community@4.2
```

the application will connect to a mongodb running on `mongodb://localhost:27017/db`

## Features

* Fetch todo data from a json source. 
* Fetch users data from csv source. 
* Fetch posts data from external api. 
* Fetch shelter data from mongo database.

The possible routes that can be tested
* Get `/api/v1/todos` - Get all todos
* Get `/api/v1/todos/:id` - Get todo by id
* Post `/api/v1/todos` - create a new todo
* Put `/api/v1/todos/:id`- update todo by id
* get `/api/v1/users` - get all users
* Get `/api/v1/posts` - get all posts
* Get `/api/v1/shelters` - get all shelters
* Post `/api/v1/shelters` - create a new shelter

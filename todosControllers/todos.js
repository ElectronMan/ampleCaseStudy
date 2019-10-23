/* eslint-disable class-methods-use-this */
import db from '../db/db';

class TodosController {
  getAllTodos(req, res) {
    const address = req.body.address
    let todos = db
    if(address) {
      console.log(address)
       todos = db.filter(todo => todo.address.toLowerCase().trim() === address.toLowerCase().trim())
    }
    
    console.log(todos)
    return res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos
    });
  }

  getTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const todoFound = db.find(todo => todo.id === id);
    if(todoFound) {
      return res.status(200).send({
        success: 'true',
        message: 'todo retrieved successfully',
        todoFound,
      });
    }
    else {
      return res.status(404).send({
        success: 'false',
        message: 'todo does not exist',
      });
    }
  }

  createTodo(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    else if (!req.body.address) {
      return res.status(400).send({
        success: 'false',
        message: 'address is required',
      });
    }
    const todo = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description,
      flag: 0,
      address: req.body.address
    };
    db.push(todo);
    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      todo,
    });
  }

  updateTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    let todoFound;
    let itemIndex;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });

    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    } else if (!req.body.flag) {
      return res.status(400).send({
        success: 'false',
        message: 'flag is required',
      });
    }
    else if (!req.body.address) {
      return res.status(400).send({
        success: 'false',
        message: 'address is required',
      });
    }

    const newTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title,
      description: req.body.description || todoFound.description,
      flag: req.body.flag || todoFound.flag,
      address: req.body.address || todoFound.address
    };

    db.splice(itemIndex, 1, newTodo);

    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      newTodo,
    });
  }
}

const todoController = new TodosController();
export default todoController;
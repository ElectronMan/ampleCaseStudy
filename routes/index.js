import express from 'express';
import TodoController from '../todosControllers/todos';
import UserController from '../todosControllers/users';
import PostController from '../todosControllers/posts';
import ShelterController from '../todosControllers/shelters';

const router = express.Router();

router.get('/api/v1/todos', TodoController.getAllTodos);
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);

router.get('/api/v1/users', UserController.getAllUsers);

router.get('/api/v1/posts', PostController.getAllPosts);

router.get('/api/v1/shelters', ShelterController.getShelters);
router.post('/api/v1/shelters', ShelterController.createShelter);

export default router;
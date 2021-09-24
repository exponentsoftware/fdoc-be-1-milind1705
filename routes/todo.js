const express = require('express');
const router = express.Router();

const todo = require('../controller/todoController');

router.post('/', todo.createTodo);
router.get('/', todo.getAll_todo);
router.put('/:id', todo.update_todo);
router.get('/:id', todo.get_todo_byId);
router.delete('/:id', todo.delete_todo_byId);

module.exports = router;
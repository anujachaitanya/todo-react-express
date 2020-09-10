const express = require('express');
const app = express();
const Database = require('./database');
const { getRedisClient } = require('./redisClient');
const {
  attachTodoDetails,
  addTask,
  deleteTask,
  setTitle,
  updateStatus,
  resetTodo,
  getTodoDetails,
} = require('./handlers');

const redisClient = getRedisClient();
app.locals.db = new Database(redisClient);

app.use(express.json());
app.use(express.static('build'));

app.use(attachTodoDetails);

app.get('/api/getTodo', getTodoDetails);

app.post('/api/addTask', addTask);

app.post('/api/toggleTaskStatus', updateStatus);

app.post('/api/deleteTask', deleteTask);

app.post('/api/setTitle', setTitle);

app.post('/api/resetTodo', resetTodo);

module.exports = { app };

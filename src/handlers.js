const { getDefaultStatus, getNextStatus } = require('./status');

const getDefaultTodoDetails = () => ({
  tasks: [],
  title: 'Todo',
  lastTaskId: 0,
});

const attachTodoDetails = (req, res, next) => {
  req.app.locals.db
    .getTodoDetails()
    .then((todoDetails) => {
      req.app.locals.todoDetails = todoDetails || getDefaultTodoDetails();
    })
    .then(next);
};

const getTodoDetails = (req, res) => {
  res.json(req.app.locals.todoDetails);
};

const addTask = async (req, res) => {
  const { todoDetails, db } = req.app.locals;
  const { content } = req.body;
  todoDetails.lastTaskId++;
  todoDetails.tasks.push({
    content,
    id: todoDetails.lastTaskId,
    status: getDefaultStatus(),
  });
  await db.setTodoDetails(todoDetails);
  res.end();
};

const deleteTask = (req, res) => {
  const { todoDetails, db } = req.app.locals;
  todoDetails.tasks = todoDetails.tasks.filter(
    (todo) => todo.id !== req.body.taskId
  );
  db.setTodoDetails(todoDetails).then(res.end);
};

const resetTodo = (req, res) => {
  const { db } = req.app.locals;
  const todoDetails = getDefaultTodoDetails();
  db.setTodoDetails(todoDetails).then(res.end);
};

const updateStatus = (req, res) => {
  const { todoDetails, db } = req.app.locals;
  const { taskId } = req.body;
  const taskToUpdate = todoDetails.tasks.find((task) => task.id === taskId);
  taskToUpdate.status = getNextStatus(taskToUpdate.status);
  db.setTodoDetails(todoDetails).then(res.end);
};

const setTitle = (req, res) => {
  const { todoDetails, db } = req.app.locals;
  todoDetails.title = req.body.title;
  db.setTodoDetails(todoDetails).then(res.end);
};

module.exports = {
  attachTodoDetails,
  addTask,
  deleteTask,
  setTitle,
  updateStatus,
  resetTodo,
  getTodoDetails,
};

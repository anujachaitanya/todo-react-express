const postRequest = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const getTodo = () => fetch('/api/getTodo').then((res) => res.json());

const addTask = (task) => {
  return postRequest('/api/addTask', { content: task });
};

const toggleTaskStatus = (taskId) => {
  return postRequest('/api/toggleTaskStatus', { taskId });
};

const deleteTask = (taskId) => {
  return postRequest('/api/deleteTask', { taskId });
};

const setTitle = (title) => {
  return postRequest('/api/setTitle', { title });
};

const resetTodo = () => {
  return postRequest('/api/resetTodo');
};

export default {
  getTodo,
  addTask,
  toggleTaskStatus,
  deleteTask,
  setTitle,
  resetTodo,
};

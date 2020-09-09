import React, { useState, useEffect } from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import Heading from './Heading';
import TodoApi from './TodoApi';

const Todo = (props) => {
  const [todo, setTodo] = useState({ title: '', tasks: [], lastTaskId: 0 });

  const updateTodo = () => TodoApi.getTodo().then(setTodo);

  const toggleTaskStatus = (taskId) => {
    TodoApi.toggleTaskStatus(taskId).then(updateTodo);
  };

  useEffect(updateTodo, []);

  const addTask = (content) => {
    TodoApi.addTask(content).then(updateTodo);
  };

  const deleteTask = (taskId) => {
    TodoApi.deleteTask(taskId).then(updateTodo);
  };

  const updateTitle = (title) => {
    TodoApi.setTitle(title).then(updateTodo);
  };

  const deleteTodo = () => {
    TodoApi.resetTodo().then(updateTodo);
  };

  return (
    <div style={{ margin: '100px', width: '20%' }}>
      <div>
        <Heading
          value={todo.title}
          onChange={updateTitle}
          deleteTodo={deleteTodo}
        />
      </div>
      <TodoItems
        tasks={todo.tasks}
        onClick={toggleTaskStatus}
        onDelete={deleteTask}
      />
      <br />
      <Input onEnterPress={addTask} className="taskInput" />
    </div>
  );
};
export default Todo;

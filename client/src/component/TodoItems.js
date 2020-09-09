import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = function (props) {
  const { tasks, onClick, onDelete } = props;
  const taskList = tasks.map((task) => {
    return (
      <TodoItem
        task={task}
        key={task.id}
        onClick={onClick}
        onDelete={onDelete}
      />
    );
  });
  return <div>{taskList}</div>;
};

export default TodoItems;

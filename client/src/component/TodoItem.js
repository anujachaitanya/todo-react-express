import React from 'react';
import '../task.css';
import Delete from './Delete';

const TodoItem = (props) => {
  const { id, content, status } = props.task;
  return (
    <div className={`taskContainer ${status}`}>
      <div className="taskIcon"></div>
      <div className="taskContent">
        <p onClick={() => props.onClick(id)}>{content}</p>
        <Delete className="deleteTaskBtn" onClick={() => props.onDelete(id)} />
      </div>
    </div>
  );
};

export default TodoItem;

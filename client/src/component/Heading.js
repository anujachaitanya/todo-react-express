import React, { useState } from 'react';
import Input from './Input';
import Delete from './Delete';

const Heading = (props) => {
  const [isEditable, setEditable] = useState(false);

  const { value, onChange, deleteTodo } = props;

  const handleClick = () => {
    setEditable(true);
  };

  const handleTitleChange = (value) => {
    setEditable(false);
    onChange(value);
  };

  return isEditable ? (
    <Input
      className="todoTitle"
      value={value}
      onEnterPress={handleTitleChange}
    />
  ) : (
    <div className="todoTitle" style={{ cursor: 'pointer' }}>
      <p onClick={handleClick}>{value}</p>
      <Delete className="deleteTodoBtn" onClick={() => deleteTodo()} />
    </div>
  );
};

export default Heading;

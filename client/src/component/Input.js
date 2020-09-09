import React, { useState } from 'react';

const Input = (props) => {
  const [state, setState] = useState({ value: props.value || '' });

  const handleChange = (event) => {
    setState({ value: event.target.value });
  };

  const handleKeyUp = (event) => {
    const value = event.target.value.trim();
    if (event.keyCode === 13 && value !== '') {
      props.onEnterPress(state.value);
      setState({ value: '' });
    }
  };

  return (
    <input
      type="text"
      className={props.className}
      value={state.value}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
    />
  );
};

export default Input;

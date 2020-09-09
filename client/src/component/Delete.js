import React from 'react';

const Delete = (props) => {
  return (
    <span className={props.className} onClick={props.onClick}>
      X
    </span>
  );
};

export default Delete;

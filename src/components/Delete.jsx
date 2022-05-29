import React from 'react'
import axios from "axios";
const DeleteItem = (props) => {
const d= 
  axios.delete('http://localhost:8080/employees',
    { data: props.id }).then(
  // Observe the data keyword this time. Very important
  // payload is the request body
  // Do something
)
  return (
    <div>
      <button key={props.key} onClick={d}>
        X
      </button>
    </div>
  );
}

export default DeleteItem
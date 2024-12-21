import React from "react";
function Headbutton(props) {
  return (
    <button name={props.name} className={props.className}>
      {props.name}
    </button>
  );
}

export default Headbutton;

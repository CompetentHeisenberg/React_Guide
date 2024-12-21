import React from "react";
import { useNavigate } from "react-router-dom";
function Headbutton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.link);
  };
  return (
    <button onClick={handleClick} name={props.name} className={props.className}>
      {props.name}
    </button>
  );
}

export default Headbutton;

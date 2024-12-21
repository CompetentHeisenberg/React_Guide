import React from "react";
import style from "../../css/elements/left_slide_list.module.css";
function List(props) {
  return (
    <ul>
      <li className={style.main}>
        <a href={props.link}>{props.name}</a>
      </li>
    </ul>
  );
}

export default List;

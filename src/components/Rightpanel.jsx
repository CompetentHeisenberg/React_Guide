import React from "react";
import right from "../css/right_panel.module.css";
import List from "./lists/Left_slide_list";
function Right() {
  return (
    <div className={right.main}>
      <div className={right.title}>
        <List name="Navigate"></List>
      </div>
      <hr className={right.cher}></hr>
      <div className={right.title_par}>
        <List name="Second <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Third <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Fifths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Sixths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Sevenths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Eighths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Nineths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Nineths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Nineths <"></List>
      </div>
      <div className={right.title_par}>
        <List name="Nineths <"></List>
      </div>
    </div>
  );
}

export default Right;

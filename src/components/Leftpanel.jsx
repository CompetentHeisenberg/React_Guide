import React from "react";
import left from "../css/left_panel.module.css";
import List from "./lists/Left_slide_list";
function Left() {
  return (
    <div className={left.main}>
      <div className={left.left}>
        <div className={left.order}>
          <List name="Menu"></List>
        </div>
        <List name="> Profile"></List>
        <List name="> Blog"></List>
        <hr className={left.cher}></hr>
        <div className={left.order}>
          <List name="Info"></List>
        </div>
        <List name="> Open Source"></List>
        <List name="> GitHub"></List>
        <hr className={left.cher}></hr>
        <div className={left.order}>
          <List name="Account"></List>
        </div>
        <List name="> Login"></List>
        <List name="> Registration"></List>
        <hr className={left.cher}></hr>
        <div className={left.order}>
          <List name="EXIT"></List>
        </div>
      </div>
    </div>
  );
}

export default Left;

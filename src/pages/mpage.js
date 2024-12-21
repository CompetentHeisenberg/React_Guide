import React from "react";
import Head from "../components/Header";
import Left from "../components/Leftpanel";
import Panel from "../components/Panel";
import Right from "../components/Rightpanel";
import Footer from "../components/Footer";
import style from "../css/mpage.module.css";
function mainpage() {
  return (
    <div className={style.start}>
      <Head></Head>
      <div className={style.main}>
        <Left></Left>
        <Panel></Panel>
        <Right></Right>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default mainpage;

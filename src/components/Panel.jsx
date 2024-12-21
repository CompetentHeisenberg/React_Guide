import React from "react";
import panel from "../css/panel.module.css";
import LabelTitle from "./labels/Label_title";
import TextInf from "./labels/Text_inf";
function Panel() {
  return (
    <div className={panel.main}>
      <div className={panel.info}>
        <LabelTitle
          className={panel.title}
          title="Theme: About Project"
        ></LabelTitle>
        <hr className={panel.cher}></hr>
        <TextInf
          className={panel.text}
          text="This is my pet project on GitHub, designed as an educational resource and
           reference guide for new programmers. Built with React, this project aims to provide
           a comprehensive learning experience for beginners. It covers various topics, from basic
           concepts to more advanced techniques, ensuring that new programmers have a solid foundation
           to build upon.The project is open-source, which means that anyone can contribute to its development.
           This collaborative approach not only helps improve the project but also provides an opportunity for contributors to learn and grow. By working together, 
           we can create a valuable resource that benefits the entire programming community.In addition to being
           a learning tool, this project also serves as a reference guide. New programmers can refer to
           it whenever they need help or guidance, making it a handy resource for their coding journey.
           The project is continuously updated with new content and improvements, ensuring that it remains
           relevant and useful."
        ></TextInf>
        <TextInf
          className={panel.text}
          text="Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even better!Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even better!Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even better!make this project even better!Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even bettermake this project even better!Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even bettermake this project even better!Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even bettermake this project even better!Feel free to check out the project on GitHub and contribute
           if you have any ideas or suggestions.
           Together, we can make this project even better"
        ></TextInf>
      </div>
    </div>
  );
}

export default Panel;

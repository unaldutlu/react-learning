import React from "react";
import style from "./style.module.css";
function A() {
  return (
    <div>
      <div className={style.title}>A</div>
      <p className={`${style.title} ${style.fontSize}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum id quam
        quia nostrum dolorum asperiores temporibus quidem modi, corporis quos
        sequi laborum commodi consequuntur quo esse eum doloribus minus
        dignissimos?
      </p>
    </div>
  );
}

export default A;

import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children} 
      {/* 사용자 정의 태그 내에 있는 텍스트가 props.children으로 저장 */}
    </button>
  );
};

export default Button;

import React from "react";

export default function CustomObj(props) {
  if (props.obj) {
    const { name, age, nickname } = props.obj;
    return (
      <div>
        <h1>이름 : {name}</h1>
        <h1>나이 : {age}</h1>
        <h1>별명 : {nickname}</h1>
      </div>
    );
  } else {
    return <div>데이터가 없습니다!</div>;
  }
}

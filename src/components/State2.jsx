import React, { useState } from "react";

export default function State2() {
  let [strState, setStrState] = useState("init");

  function changeState() {
    strState += "-";
    console.log(strState);
  }

  return (
    <div>
      <button onClick={() => setStrState(strState + "+")}>리랜더링 반복!</button> <br />
      <button onClick={() => changeState()}>스테이트 강제 변경!</button> <br />
      <span>{strState}</span>
    </div>
  );
}

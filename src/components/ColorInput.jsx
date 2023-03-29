import React, { useRef } from 'react';

export default function ColorInput() {
  const inputEl = useRef();
  const backEl = useRef();

  const adjustCSS = () => {
    backEl.current.style.backgroundColor = inputEl.current.value;
  };
  return (
    <div ref={backEl}>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={adjustCSS}>색 적용</button>
    </div>
  );
}

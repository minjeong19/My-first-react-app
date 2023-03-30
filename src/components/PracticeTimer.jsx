import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(true);
  const time = useRef(0);
  // 클릭할때만 사용하기 위해서 함수로 만들어줌
  const showTimer = () => {
    setRender(!render);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);
  return (
    <>
      <h1>{time.current}</h1>
      <button onClick={showTimer}>시간</button>
    </>
  );
}

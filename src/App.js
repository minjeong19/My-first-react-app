import React from 'react';
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ConditionalState from './components/ConditionalState';
import PracticeConditional from './components/PracticeConditional';
import PracticeConditional2 from './components/PracticeConditional2';
import PracticeOne from './components/PracticeOne';
import PracticeTimer from './components/PracticeTimer';
import PracticeTimerRender from './components/PracticeTimerRender';
import TestUseEffect from './components/TestUseEffect';
import Timer from './components/Timer';
import TimerRender from './components/TimerRender';

function App() {
  const nameArr = ['뽀로로', '루피', '크롱'];
  const pororoObj = {
    name: '뽀로로',
    age: '5',
    nickname: '사고뭉치',
  };
  return (
    <div className="App">
      <PracticeTimerRender />
      {/* <ConditionalState /> */}
      {/* <h1>안녕하세요!</h1>
      <span>반갑습니다.</span> */}
      {/* <CustomList arr={nameArr} />
      <CustomObj obj={pororoObj} /> */}
      {/* <PropsHeader text="안녕하세요(oﾟvﾟ)ノ" />
      <PropsHeader text="Bye, Props World!" />
      <PropsHeader text="Welcome back, Props World!" />
      <MultiProps text="Go Naver" href="https://naver.com" userID="tetz" /> */}
      {/* <div className={test}>
        {typeof test === "string" ? "문자열" : "문자열 아님"}
      </div>
      <img src={image} alt="logo" /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import PropsStyle from './components/PropsStyle';
import TestScss from './components/TestScss';
import ImgComponent2 from './components/ImgComponent2';
import FancyBorder from './components/FancyBorder';

function App() {
  const nameArr = ['뽀로로', '루피', '크롱'];
  const pororoObj = {
    name: '뽀로로',
    age: '5',
    nickname: '사고뭉치',
  };
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용한 기술입니다!</p>
        <ImgComponent2 />
      </FancyBorder>
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

import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassCponent from './components/ClassComponent';
import FunctionalComponet from './components/FunctionalComponent';
import image from './components/dog.jpg';
import Inline from './components/Inline';
import EventHandler from './components/EventHandler';
import ExInline from './components/ExInline';
import State from './components/State';
import State2 from './components/State2';
import ExUseState from './components/ExUseState';
import Condition from './components/Condition';
import ExCondition from './components/ExCondition';
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import StateProblem from './components/StateProblem';
import List from './components/List';
import MultiProps from './components/MultiProps';
import PropsHeader from './components/PropsHeader';
import ClassProps from './components/ClassProps';
import ListChild from './components/ListChild';
import ListMap from './components/ListMap';
import Item from './components/Item';
import ItemList from './components/ItemList';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ExChangeObj from './components/ExChangeObj';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';
import RefDomControl from './components/RefDomControl';
import ColorInput from './components/ColorInput';
import RandomQuiz from './components/RandomQuiz';
import Comparing from './components/Comparing';
import ReactFragment from './components/ReactFragment';

function App() {
  const nameArr = ['뽀로로', '루피', '크롱'];
  const pororoObj = {
    name: '뽀로로',
    age: '5',
    nickname: '사고뭉치',
  };
  return (
    <div className="App">
      <h1>안녕하세요!</h1>
      <span>반갑습니다.</span>
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

import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassCponent from "./components/ClassComponent";
import FunctionalComponet from "./components/FunctionalComponent";
import image from "./components/dog.jpg";
import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import ExInline from "./components/ExInline";
import State from "./components/State";
import State2 from "./components/State2";
import ExUseState from "./components/ExUseState";
import Condition from "./components/Condition";
import ExCondition from "./components/ExCondition";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";

function App() {
  const str = "Hello, JSX World";
  function amazing() {
    return "amazingJSX";
  }
  function alertFunc() {
    alert("JSX is amazing");
  }
  const test = "test";
  return (
    <div className="App">
      <StateAndVariable />
      {/* <div className={test}>
        {typeof test === "string" ? "문자열" : "문자열 아님"}
      </div>
      <img src={image} alt="logo" /> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassCponent from "./components/ClassComponent";
import FunctionalComponet from "./components/FunctionalComponent";
function App() {
  return (
    <div className="App">
      <ClassCponent />
      <FunctionalComponet />
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;

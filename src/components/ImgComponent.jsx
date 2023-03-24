import React, { Component } from "react";

import image from "./dog.jpg";

// function ImgComponent() {
//   return <img src={image} className="App-logo" alt="logo" />;
// }

class ImgComponent extends Component {
  render() {
    return <img src={image} className="App-logo" alt="logo" />;
  }
}

export default ImgComponent;

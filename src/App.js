import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
// import Newsitem from "./Newsitem";

export default class extends Component {
  render() {
    return (
      <>
        <Navbar />
      <div className="container my-3" >
        <News />
      </div>
      </>
    );
  }
}

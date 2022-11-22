import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { animals, birds } from "./component/Data";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Animal from "./component/Animal";
import Bird from "./component/Bird";
import About from "./component/About";
import "./App.css";

export default class App extends Component {
  state = { animals: animals, birds: birds, search: "" };

  removeHandeler = (name) => {
    console.log(name);
    const UpdatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: UpdatedArray });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/animal"
            element={
              <Animal
                animals={this.state.animals}
                removeCard={() => this.removeHandeler()}
              />
            }
          />
          <Route path="/bird" element={<Bird birds={this.state.birds} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

import * as React from "react";
import "./App.css";

import { HitProvider } from "./context/HitProvider";

import Canvas from "./components/Canvas";
import HomePage from "./components/HomePage";
import GridStyle from "./components/GridStyle";
import ModalComponent from "./components/Modal";

function App() {
  return (
    <HitProvider>
      <div className="App" class="d-flex justify-content-start">
        <div class="w-75">
          <HomePage />
          <GridStyle />
        </div>
        <Canvas class="w-24" />
      </div>
      ``
      <div>
        <ModalComponent />
      </div>
    </HitProvider>
  );
}

export default App;

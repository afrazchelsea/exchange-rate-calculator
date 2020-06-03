import React from "react";
import { Header } from "./components/Header";
import { First } from "./components/First";
import { Swap } from "./components/Swap";
import { Second } from "./components/Second";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <First />
        <Swap />
        <Second />
      </div>
    </div>
  );
}

export default App;

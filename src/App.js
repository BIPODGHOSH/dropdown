import React from "react";
import Dropdown from "./dropdown/Dropdown";

function App() {
  const dropdownItems = ["yes", "probable no"];

  return (
    <div className="App">
      <Dropdown items={dropdownItems} />
    </div>
  );
}

export default App;

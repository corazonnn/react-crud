import React from "react";

function App() {
  const ClickEvent = () => {
    return alert("Click!!!")
  }
  return (
    <React.Fragment>
      <h1 className="foo">HELLO WORLD</h1>
      <button onClick={ClickEvent}>BUTTON</button>
    </React.Fragment>
  );
}

export default App;

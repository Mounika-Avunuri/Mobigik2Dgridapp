import './App.css';
import { useState, useEffect } from 'react';
function App() {
  return (
    <div className="App">
      <h4>Welcome </h4>
      <input style={{ width: "90%", padding: "5px", margin: "10px", textalign: "center", outline: "none", borderradius: "10px", fontsize: "14px", fontweight: "600" }}
        type="number" placeholder='Enter the number of rows' />
      <input style={{ width: "90%", padding: "5px", margin: "10px", textalign: "center", outline: "none", borderradius: "10px", fontsize: "14px", fontweight: "600" }} type="number" placeholder='Enter the number of columns' />
      <input type="text" style={{ display: "inline-block", margin: "20px 0" }} placeholder='search result' />
      <button style={{ borderradius: "8px", textalign: "center", padding: "8px 3px" }}>search</button>
      <button style={{ width: "100px", padding: "8px 3px", fontweight: "bold", borderradius: "10px", float: "right", margin: "20px 0" }}>create</button>

    </div>

  );
}

export default App;

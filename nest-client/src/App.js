import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let color = event =>{
    event.target.setAttribute("fill", "green")
  }

  let uncolor = event =>{
    event.target.setAttribute("fill", "purple")
  }

  let row = ["red", "orange", "yellow", "green", "blue"]
  let grid= [
    ["red", "orange", "yellow", "green", "blue"],
    ["green", "blue","red", "orange", "yellow"],
    ["red", "orange", "yellow", "green", "blue"]
  ]

  let arr = ["booger", "caravan"];
  let h = arr.pop();
  console.log(h, arr)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <svg viewBox="-110 -200 3150 1200" xmlns="http://www.w3.org/2000/svg">
      <g> 
        {/* <polygon onMouseEnter={color} onMouseLeave={uncolor} points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87" fill="purple" stroke="black" />
       <g transform="translate(0,179)"> <polygon  onMouseEnter={color} onMouseLeave={uncolor} points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87" fill="purple" stroke="black" /></g> */}
      {
        grid.map((row, index) => row.map((filler, i) => 
        (<g key={i} transform={`translate(${150 * index},${174* i + (index%2 !== 0 ? 87 : 0)})`}> 
            <polygon 
              id={`hex-${index}-${i}`}
              class={`hex-${index}-${i}`}
              points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"
              fill={filler}
              // stroke="black"
            />
            <text>H</text>
        </g>)
      ))
      }
      
      {/* {row.map((filler, i) => 
        (<g key={i} transform={`translate(0,${175* i})`}> 
            <polygon 
              points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"
              fill={filler}
              stroke="black"
              onMouseEnter={color}
            />
        </g>)
      )} */}
      </g>
    </svg>
    // <div>
    //   {[<h1>Booger</h1>,[<h1>Booger</h1>,<h1>horses</h1>]]}
    // </div>
  );
}

export default App;

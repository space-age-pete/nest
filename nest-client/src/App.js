import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import sheepHex from "./image2vector.svg";
import HexBackSVG from "./components/HexBackSVG"

function App() {
  let colors = ["red", "orange", "yellow", "green", "blue", "yellow", "green", "red", "orange", "yellow", "green", "blue", "blue", "yellow", "green", "red"]
  let [tileList, setTileList] = useState(["lightgreen", "lightgreen", "lightgreen", "lightgreen", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "grey", "grey", "grey", "red", "red", "red", "tan"]);
  let [selectedTile, setSelectedTile] = useState(null);
  let [numberList, setNumberList] = useState([2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]);

  console.log(HexBackSVG)

  let tile = 0;
  let number = 0;

  let grid= [
    ["red", "orange", "yellow"],
    ["green", "blue","red", "orange"],
    ["red", "orange", "yellow", "green", "blue"],
    ["green", "blue","red", "orange"],
    ["red", "orange", "yellow"],
  ]

  let shuffle = (b) => {
    if(selectedTile){
      selectedTile.setAttribute("stroke-width", 1);
      setSelectedTile(null);
    }
    tile = 0;
    let a = [...b]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setTileList(a)
  }

  let shuffle2 = (b) => {
    if(selectedTile){
      selectedTile.setAttribute("stroke-width", 1);
      setSelectedTile(null);
    }
    number = 0;
    let a = [...b]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setNumberList(a)
  }

  let swap = event => {
    let clickedOn = event.target;
    if(!selectedTile){
      // clickedOn.setAttribute("stroke", "black");
      clickedOn.setAttribute("stroke-width", "5")
      
      setSelectedTile(clickedOn);
    } else {
      let fillTemp = selectedTile.getAttribute("fill");
      selectedTile.setAttribute("fill", clickedOn.getAttribute("fill"));
      clickedOn.setAttribute("fill", fillTemp);
      //selectedTile.removeAttribute("stroke");
      selectedTile.setAttribute("stroke-width", 1);
      setSelectedTile(null);
    }
  }

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
   <div> 
     <button onClick={_=>shuffle(tileList)}>Shuffle Tiles</button>
     <button onClick={_=>shuffle2(numberList)}>Shuffle Numbers</button>
     <img src={sheepHex} className="App-logo" alt="logo" />
     <svg viewBox="-110 -200 3150 1200" xmlns="http://www.w3.org/2000/svg">
      <g> 
        {/* <polygon onMouseEnter={color} onMouseLeave={uncolor} points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87" fill="purple" stroke="black" />
       <g transform="translate(0,179)"> <polygon  onMouseEnter={color} onMouseLeave={uncolor} points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87" fill="purple" stroke="black" /></g> */}
      {
        grid.map((row, index) => row.map((filler, i) => 
        (<g key={i} transform={`translate(${150 * index},${174* i + (index%2 !== 0 ? 87 : ((index === 0 || index === 4)? 174 : 0))})`}> 
            <polygon 
              id={`hex-${index}-${i}`}
              className={tileList[tile]}
              points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"
              fill={tileList[tile++]}
              stroke="black"
              strokeWidth="1"
              onClick={swap}
              />
            {/* <text>{index}, {i}</text> */}
            <text>{tileList[tile - 1] === "tan" ? "D" : numberList[number++]}</text>
        </g>)
      ))
    }
      
      {/* <g transform={`translate(500,500)`}> 
        
      <HexBackSVG></HexBackSVG>
            <polygon 
              id="armpit"
              className="sheep"
              points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"
              // fill="pink"
              // stroke="black"
              pattern="url(#svgg)"
              onClick={swap}
            />
            <text>sheep?</text>
        </g> */}
      </g>
    </svg>
    </div>
    // <div>
    //   {[<h1>Booger</h1>,[<h1>Booger</h1>,<h1>horses</h1>]]}
    // </div>
  );
}

export default App;

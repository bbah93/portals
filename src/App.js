import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ACAB from './components/ACAB.js'
import Seeing_Signs from './components/Seeing_Signs.js'
import Kablam from './components/Kablam.js'
import AlienSpeak from './components/AlienSpeak.js'
import FunnyLight from './components/FunnyLight.js'
import LeaveEarth from './components/LeaveEarth.js'
import AllGoesBad from './components/AllGoesBad.js'
import Spaceships from './components/Spaceships.js'
import DiamondDark from './components/DiamondDark.js'
import Numb from './components/Numb.js'

import ColorPalette from './components/ColorPalette'
import Home from './components/Home'


function App() {

  const fillPaths = pathData =>{
      console.log("fillPaths", pathData);
      return pathData;
  }

  const [fillColors, setFillColors] = useState(Array(fillPaths).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')


  const onFillColor = i => {

    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)

  }

  return (
/* <Router> */
    <div className="App">
      <div className="container">
     
     {/* <Switch>
     

      <Route path="/kablam">
        <Kablam fillColors={fillColors} onFill={onFillColor} />
        </Route>
        
        <Route path="/alien-speak">
        <AlienSpeak fillColors={fillColors} onFill={onFillColor} />
        </Route> 

        <Route path="/funny-in-the-light">
        <FunnyLight fillColors={fillColors} onFill={onFillColor} />
        </Route> 

        <Route exact path="/acab">
        <ACAB fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/seeing-signs">
        <Seeing_Signs fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/leave-earth">
        <LeaveEarth fillColors={fillColors} onFill={onFillColor} />
        </Route>

     <Route path="/">
        <Home />
        </Route>
        </Switch> */}

        <Numb fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />

      </div>


      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} />

    </div>
    /* </Router> */
  );
}

export default App;

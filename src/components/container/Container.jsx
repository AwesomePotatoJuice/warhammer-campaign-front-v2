import React, {useState} from 'react';
import './Container.css';
import StarSystem from "../starsystem/StarSystem";
import NextTurn from "../nextturn/NextTurn";

function Container() {
    const [turnsCounter, setTurnsCounter] = useState(0)
  return (
    <div>
      <StarSystem turnsCounter={turnsCounter}/>
      <NextTurn turnsCounter={turnsCounter} onNextTurn={()=>{
          setTurnsCounter(turnsCounter + 1)
      }}/>
    </div>
  );
}

export default Container;

import React from "react";
import './NextTurn.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function hide(e) {
    let element = document.querySelector(".next-turn");
    if (element.classList.contains("hide")){
        element.classList.add("show")
        element.classList.remove("hide")
    }
    else{
        element.classList.add("hide")
        element.classList.remove("show")
    }
}

const NextTurn = (props) => {
    return (
        <div className={"next-turn"}>
            Current player: JOPA
            <div>
                Turn: {props.turnsCounter} <button onClick={props.onNextTurn}>Next turn!</button>
            </div>
            <div className={"hide-show-button"} onClick={hide}>
                <FontAwesomeIcon icon={faAngleDoubleDown} size={"lg"}/>
            </div>
        </div>
    );
}

export default NextTurn;

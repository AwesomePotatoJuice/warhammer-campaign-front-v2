import React from "react";
import './NextTurn.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";

function hide(e) {
    let element = document.querySelector(".next-turn");
    let perem = document.querySelector(".hide-show-button");
    let icon = document.querySelector(".icon")

    if (element.classList.contains("hide")){
        element.classList.add("show")
        element.classList.remove("hide")
        perem.classList.add("opacity")
        icon.classList.add("icon-reverse")
    }
    else{
        element.classList.add("hide")
        element.classList.remove("show")
        perem.classList.remove("opacity")
        icon.classList.remove("icon-reverse")
    }
}

const NextTurn = (props) => {
    return (
            <div className={"next-turn"}>
                <span>Current player: JOPA</span>
                <div>
                    <span>Turn: {props.turnsCounter}</span> <br/>
                    <button onClick={props.onNextTurn}>Next turn!</button>
                </div>
                <div className={"hide-show-button"} onClick={hide}>
                    <FontAwesomeIcon className={"icon"} icon={faAngleDoubleDown} size={"lg"}/>
                </div>
            </div>
    );
}

export default NextTurn;

import React, {useEffect, useState} from "react";
import './StarSystem.css'
import {Stage, Layer, Ellipse} from 'react-konva'


import Anerog from '../../img/planets/Anerog.png'
import Canatt from '../../img/planets/Canatt.png'
import Galyan from '../../img/planets/Galyan.png'
import Genar from '../../img/planets/Genar.png'
import Mustan from '../../img/planets/Mustan.png'
import Prisus from '../../img/planets/Prisus.png'
import Rannari from '../../img/planets/Rannari.png'
import Teslin from '../../img/planets/Teslin.png'

import Danadat from '../../img/planets/Danadat.png'
class MyEllipse extends React.Component {
    render() {
        return (
            <Ellipse
                x={window.innerWidth/2}
                y={window.innerHeight/2}
                stroke={"#b748cb"}
                strokeWidth={"0.7"}
                shadowColor={"rgba(0,183,255,0.64)"}
                shadowOffsetX={"0.7"}
                shadowOffsetY={"0.7"}
                shadowBlur={"2"}
                dash={[10, 5]}
                radiusX={window.innerWidth/this.props.position}
                radiusY={window.innerHeight/this.props.position }
            />
        );
    }
}
class Planet extends React.Component {

    render() {
        let displayStyle = "block";
        let opacityStyle = 1;
        let t = 2 * Math.PI / 360 * this.props.angle;

        if(this.props.ghost){
            displayStyle = "none";
            t = 2 * Math.PI / 360 * (this.props.angle + this.props.speed);
            opacityStyle = 0.6;
        }

        let radiusX = window.innerWidth/this.props.position;
        let radiusY = window.innerHeight/this.props.position ;
        let pointY = (radiusX * Math.cos(t) + window.innerWidth/2 - 15) + "px";
        let pointX = (radiusY * Math.sin(t) + window.innerHeight/2 - 15) + "px";

        const position = {
            left: pointY, //Я хз почему они инверсированы
            top: pointX,
            rotate: this.props.angle + "deg",
            display: displayStyle,
            opacity: opacityStyle
        };
        let planetNameString = (String(this.props.planet).split("/", 4)[3]).split(".", 1)[0];
        return (
                <img onClick={toggleProjection} onContextMenu={openPlanetMenu} onMouseOut={hideOrbitProjection} onMouseOver={showOrbitProjection} title={"Planet: " + planetNameString + "\nOrbital speed: " + this.props.speed} className={"planet"} style={position} src={this.props.planet} alt={planetNameString}/>
        );
    }
}

function showOrbitProjection(e){
    e.target.nextElementSibling.style.display = "block"
}

function hideOrbitProjection(e){
    e.target.nextElementSibling.style.display = "none"
}

function toggleProjection(e){
    e.target.nextElementSibling.classList.toggle("showProjection")
}

function openPlanetMenu(e){
    e.preventDefault();
    alert("Эта штука откроет меню планеты " + e.target.attributes.getNamedItem("alt").value);
}

const StarSystem = (props) => {
    console.clear();
    const [angleAnerog, setAngleAnerog] = useState(221);
    const speedAngleAnerog = 10;
    const [angleCanatt, setAngleCanatt] = useState(264);
    const speedAngleCanatt = 22;
    const [angleGalyan, setAngleGalyan] = useState(190);
    const speedAngleGalyan = 12;
    const [angleGenar, setAngleGenar] = useState(210);
    const speedAngleGenar = -20;
    const [angleMustan, setAngleMustan] = useState(330);
    const speedAngleMustan = -15;
    const [anglePrisus, setAnglePrisus] = useState(103);
    const speedAnglePrisus = 15;
    const [angleRannari, setAngleRannari] = useState(20);
    const speedAngleRannari = 17;
    const [angleTeslin, setAngleTeslin] = useState(289);
    const speedAngleTeslin = 19;

    useEffect(()=>{
        setAngleAnerog(angleAnerog + speedAngleAnerog);
        setAngleCanatt(angleCanatt + speedAngleCanatt);
        setAngleGalyan(angleGalyan + speedAngleGalyan);
        setAngleGenar(angleGenar + speedAngleGenar);
        setAngleMustan(angleMustan + speedAngleMustan);
        setAnglePrisus(anglePrisus + speedAnglePrisus);
        setAngleRannari(angleRannari + speedAngleRannari);
        setAngleTeslin(angleTeslin + speedAngleTeslin);
    }, [props.turnsCounter])//, angleCanatt, angleGalyan, angleGenar, angleMustan, anglePrisus, angleRannari, angleTeslin])

    return (
        <div className={"star-system"}>
            <Planet position={2.2} speed={speedAngleAnerog} planet={Anerog} angle={angleAnerog}/>
            <Planet ghost position={2.2} speed={speedAngleAnerog} planet={Anerog} angle={angleAnerog}/>
            <Planet position={2.5} speed={speedAngleCanatt} planet={Canatt} angle={angleCanatt}/>
            <Planet ghost position={2.5} speed={speedAngleCanatt} planet={Canatt} angle={angleCanatt}/>
            <Planet position={2.9} speed={speedAngleGalyan} planet={Galyan} angle={angleGalyan}/>
            <Planet ghost position={2.9} speed={speedAngleGalyan} planet={Galyan} angle={angleGalyan}/>
            <Planet position={3.5} speed={speedAngleGenar} planet={Genar} angle={angleGenar}/>
            <Planet ghost position={3.5} speed={speedAngleGenar} planet={Genar} angle={angleGenar}/>
            <Planet position={4.2} speed={speedAngleMustan} planet={Mustan} angle={angleMustan}/>
            <Planet ghost position={4.2} speed={speedAngleMustan} planet={Mustan} angle={angleMustan}/>
            <Planet position={5}   speed={speedAnglePrisus} planet={Prisus} angle={anglePrisus}/>
            <Planet ghost position={5}   speed={speedAnglePrisus} planet={Prisus} angle={anglePrisus}/>
            <Planet position={5.8} speed={speedAngleRannari} planet={Rannari} angle={angleRannari}/>
            <Planet ghost position={5.8} speed={speedAngleRannari} planet={Rannari} angle={angleRannari}/>
            <Planet position={6.8} speed={speedAngleTeslin} planet={Teslin} angle={angleTeslin}/>
            <Planet ghost position={6.8} speed={speedAngleTeslin} planet={Teslin} angle={angleTeslin}/>

            <img className={"sun"} src={Danadat}  alt={"Danadat"}/>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <MyEllipse position={2.2}/>
                    <MyEllipse position={2.5}/>
                    <MyEllipse position={2.9}/>
                    <MyEllipse position={3.5}/>
                    <MyEllipse position={4.2}/>
                    <MyEllipse position={5}/>
                    <MyEllipse position={5.8}/>
                    <MyEllipse position={6.8}/>
                </Layer>
            </Stage>
        </div>
    );
}

export default StarSystem;

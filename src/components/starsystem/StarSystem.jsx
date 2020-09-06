import React from "react";
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
                radiusX={window.innerWidth/this.props.position}
                radiusY={window.innerHeight/this.props.position }
            />
        );
    }
}
class Planet extends React.Component {

    render() {
        let radiusX = window.innerWidth/this.props.position;
        let radiusY = window.innerHeight/this.props.position ;
        let pi2 = 2 * Math.PI;
        let t = 2 * Math.PI / 360 * this.props.angle;
        // t = 2 * Math.PI / 360 * 90
        let pointY = (radiusX * Math.cos(t) + window.innerWidth/2 - 15) + "px";
        let pointX = (radiusY * Math.sin(t) + window.innerHeight/2 - 15) + "px";
        const position = {
            left: pointY, //Я хз почему они инверсированы
            top: pointX,
            rotate: this.props.angle + "deg"
        };
        return (
                <img className={"planet"} style={position} src={this.props.planet} alt={String(this.props.planet)}/>
        );
    }
}
const StarSystem = () => {
        return (
        <div className={"star-system"}>
            <Planet position={2.2} planet={Anerog} angle={Math.random()*360}/>
            <Planet position={2.5} planet={Canatt} angle={Math.random()*360}/>
            <Planet position={2.9} planet={Galyan} angle={Math.random()*360}/>
            <Planet position={3.5} planet={Genar} angle={Math.random()*360}/>
            <Planet position={4.2} planet={Mustan} angle={Math.random()*360}/>
            <Planet position={5}   planet={Prisus} angle={Math.random()*360}/>
            <Planet position={5.8} planet={Rannari} angle={Math.random()*360}/>
            <Planet position={6.8} planet={Teslin} angle={Math.random()*360}/>

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

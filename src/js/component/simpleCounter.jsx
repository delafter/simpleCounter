import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const SimpleCounter = (props) => {
    return (
        <div className="simpleCounter">
            <div className="clock">
                <span style={{fontSize:"70px", color:"red" }} className="material-symbols-outlined">timer</span>
            </div>
            <div style={{fontSize:"60px", color:"red",  marginLeft: "10px" }} className="numberFour">{props.numberFour}</div>
            <div style={{fontSize:"60px", color:"red", marginLeft: "10px" }} className="numberThree">{props.numberThree}</div>
            <div style={{fontSize:"60px", color:"red",  marginLeft: "10px" }} className="numberTwo">{props.numberTwo}</div>
            <div style={{fontSize:"60px", color:"red",  marginLeft: "10px" }} className="numberOne">{props.numberOne}</div>   
        </div>
    );
};

SimpleCounter.propTypes = {
    numberFour: PropTypes.number,
    numberThree: PropTypes.number,
    numberTwo: PropTypes.number,
    numberOne: PropTypes.number,
};

let counter = 0;
setInterval(function() {
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    counter++;
    ReactDOM.render(<SimpleCounter numberOne={one} numberTwo={two} numberThree={three} numberFour={four}/>, document.querySelector("#app"));
}, 1000);

export default SimpleCounter;
import React from "react";
import { useState } from "react";

export default function About() {

    const [myTheme, setMyTheme] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btn, setBtn] = useState("Enable Dark Mode");

    const changeStyle = () => {
        if(myTheme.color === 'black'){
            setMyTheme({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtn("Enable Light Mode")
        }
        else{
            setMyTheme({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtn("Enable Dark Mode")
        }
    }
    

    return (
        <div className="card" style={myTheme}>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="card-img-top" style={{height: 200, width: 200, alignSelf:'center'}} alt="..." />
            <div className="card-body">
                <h2 className="About Us">Card title</h2>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <button className="btn btn-primary" onClick={changeStyle}>{btn}</button>
            </div>
        </div>
    );
}

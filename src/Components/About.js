import React from "react";
// import { useState } from "react";

export default function About() {
    // const [myTheme, setMyTheme] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // });

    // const [btn, setBtn] = useState("Enable Dark Mode");

    // const changeStyle = () => {
    //     if(myTheme.color === 'black'){
    //         setMyTheme({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtn("Enable Light Mode")
    //     }
    //     else{
    //         setMyTheme({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtn("Enable Dark Mode")
    //     }
    // }

    return (
        <div
            className="card my-3"
            // style={{ color: "black", backgroundColor: "white" }}
        >
            <img
                src="https://icones.pro/wp-content/uploads/2021/02/icone-d-ecriture-de-texte-png-symbole-noir.png"
                className="card-img-top my-5"
                style={{ height: 200, width: 200, alignSelf: "center" }}
                alt="..."
            />
            <div className="card-body">
                <h1 className="About Us my-3">UpperLowerHub</h1>
                <p className="card-text">
                    Explore the dynamic interplay of upper and lower case letter
                    with our diverse collection of text transformation.
                </p>
                {/* <button className="btn btn-primary" onClick={changeStyle}>{btn}</button> */}
            </div>
        </div>
    );
}

import React from "react";
import { useState } from "react";

export default function Textform(props) {
    // var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const [text, setText] = useState("");

    const handleChange = () => {
        let newstr = text.toUpperCase();
        setText(newstr);
        props.alert("Converted to Upper Case", "success")
    };
    const handleLowChange = () => {
        let newstr = text.toLowerCase();
        setText(newstr);
        props.alert("Converted to Lower Case", "success")
    };
    // const handleEmail = () => {
    //   if(reg.test(text) === true){
    //     alert('email verified')
    //   }
    // }
    const handleClear = () => {
        //let newstr = text.toLowerCase();
        setText("");
        props.alert("Successfully clear the text", "success")
    };
    // var wordsCount = text.match(/\S+/g)
    // console.log(wordsCount.length)
    const handleOnChange = (event) => {
        // console.log('hello')
        setText(event.target.value);
    };
    return (
        <>
            <div className="container" >
                <h1>{props.title}</h1>
                <div className="mb-3" style={{color: props.mode === 'light' ? 'white' : 'black'}}>
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="textBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleChange}>
                    Convert to UpperCase
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleLowChange}
                >
                    Convert to LowerCase
                </button>
                {/* <button className="btn btn-primary mx-2" onClick={handleEmail}>Check Email</button> */}
                <button className="btn btn-primary mx-2" onClick={handleClear}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>
                    {text.length > 1 ? text.match(/\S+/g).length : 0} words and {text.length} characters
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text above to preview it.'}</p>
            </div>
        </>
    );
}

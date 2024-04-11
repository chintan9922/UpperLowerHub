import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const changeMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "black";
            showAlert("Dark Mode Enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light Mode Enabled", "success");
        }
    };
    const changeRed = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#913636";
            showAlert("Dark Mode Enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "#fa7373";
            showAlert("Light Mode Enabled", "success");
        }
    };
    const changeGreen = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#237a4f";
            showAlert("Dark Green Mode Enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "#81fcbf";
            showAlert("Light Green Color Enabled", "success");
        }
    };
    const changeBlue = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#7afbff";
            showAlert("Light Blue Color Enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "#45acb0";
            showAlert("Dark Blue Color Enabled", "success");
        }
    };
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    return (
        <>
            <Router>
                <Navbar
                    mode={mode}
                    changeMode={changeMode}
                    changeRed={changeRed}
                    changeGreen={changeGreen}
                    changeBlue={changeBlue}
                />
                <Alert alert={alert} />
                <div
                    className="container my-3"
                    style={{ color: mode === "light" ? "black" : "white" }}
                >
                    <Routes>
                    
                        <Route exact path="/about" element={<About />} />
                        <Route
                            exact
                            path="/"
                            element={
                                <Textform
                                    title="Enter Your Text Here"
                                    mode={mode}
                                    alert={showAlert}
                                />
                            }
                        />
                    </Routes>
                    
                </div>
            </Router>
        </>
        // <div className='container' style={{  borderColor:'black', height: "100vh", backgroundColor:'Highlight'}}>
        // <div style={{justifyContent:'center', padding:25, textAlign:'center'}}>
        //   {
        //     name === '' ? <></> : <h1>{name}</h1>
        //   }
        //   <label style={{alignSelf:'center'}}>
        //     Name: <input name='name' onChange={e => setName(e.target.value)}/>
        //   </label>
        //   </div>
        //   <div style={{justifyContent:'center', textAlign:'center', padding:25}}>
        //   <button type='submit' onClick={() => name === '' ? alert(`please enter your name`) : alert(name)}>Submit</button>
        //   </div>
        // </div>
    );
}

export default App;

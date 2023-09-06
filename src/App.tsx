import React from "react";
import "./App.css";
import SonicBoom from "../src/SonicBoom.jpeg";

function App(): JSX.Element {
    return (
        /*Nyllise Graham*/
        <div className="App">
            <header className="App-header">
                <h2 style={{ color: "gray" }}>Sonic Boom!</h2>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
                <ul>
                    <li>Sonic</li>
                    <li>Guile</li>
                    <li>💥💥💥</li>
                </ul>
            </p>
            <img src={SonicBoom} width="300" alt="SB" />
        </div>
    );
}

export default App;

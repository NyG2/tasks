import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div>CISC275</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Counter></Counter>
            <RevealAnswer></RevealAnswer>
            ____________________________________________________
            <ChangeType></ChangeType>
            ____________________________________________________
            <div>
                <StartAttempt></StartAttempt>
                ____________________________________________________
                <TwoDice></TwoDice>
                ____________________________________________________
            </div>
            <div>
                <CycleHoliday></CycleHoliday>
            </div>
        </div>
    );
}

export default App;

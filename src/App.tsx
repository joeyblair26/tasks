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
        <div>
            <hr></hr>
            CISC275
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr></hr>
            <ChangeType></ChangeType>
            <hr></hr>
            <TwoDice></TwoDice>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;

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
            <p>
                <Counter></Counter>
            </p>
            <p>
                <RevealAnswer></RevealAnswer>
            </p>
            <p>
                <ChangeType></ChangeType>
            </p>
            <p>
                <TwoDice></TwoDice>
            </p>
            <p>
                <StartAttempt></StartAttempt>
            </p>
        </div>
    );
}

export default App;

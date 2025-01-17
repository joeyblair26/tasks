import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubleValues {
    // The type is a function that consumes a boolean and returns void
    setDhValue: (newDH: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: doubleValues): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: doubleValues): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h1>Double Half</h1>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import pikachu from "../src/pikachu.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>This is a header.</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reloa. Joey Blair and Hello World
            </p>
            <p>
                <ol>
                    <li>First Item</li>
                    <li>Second Item</li>
                    <li>Third Item</li>
                </ol>
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                <img src={pikachu} alt="Pikachu" />
            </p>
            <Container>
                <Row>
                    <Col>
                        Red Rectangle One.<div className="rectangle"></div>
                    </Col>
                    <Col>
                        Red Rectangle Two.<div className="rectangleTwo"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

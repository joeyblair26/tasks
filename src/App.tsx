import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "C:/Users/joeyb/tasks/src/images/pikachu.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>This is a header.</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Joey Blair and Hello World
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
                <img
                    src={"C:/Users/joeyb/tasks/src/images/pikachu.jpg"}
                    alt="Pikachu"
                />
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

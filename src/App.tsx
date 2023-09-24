import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import SonicBoom from "../src/SonicBoom.jpeg";

function App(): JSX.Element {
    return (
        /*Nyllise Graham*/
        <div className="App">
            <header className="App-header">
                <h2 style={{ color: "gray" }}>Sonic Boom!</h2>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <ul>
                    <li>Sonic</li>
                    <li>Guile</li>
                    <li>💥💥💥</li>
                </ul>
            </div>
            <img src={SonicBoom} width="300" alt="SB" />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 200,
                                height: 300
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 200,
                                height: 300
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

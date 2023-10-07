import React, { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setuserAnswer] = useState<string>("");

    function userInput(event: React.ChangeEvent<HTMLInputElement>) {
        setuserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <FormGroup controlId="formCheckAnswer">
                <FormControl value={userAnswer} onChange={userInput} />
            </FormGroup>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

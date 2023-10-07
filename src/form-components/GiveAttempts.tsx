import React, { useState } from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptRequest, setAttemptRequest] = useState<string>("");

    const handleUseClick = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainClick = () => {
        const requestedAttempts = parseInt(attemptRequest);

        if (!isNaN(requestedAttempts) && requestedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
            setAttemptRequest("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <FormGroup controlId="formGivenAttempts">
                <FormControl
                    type="number"
                    value={attemptRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptRequest(event.target.value)
                    }
                />
                <Button onClick={handleUseClick} disabled={attemptsLeft === 0}>
                    use
                </Button>
                <Button onClick={handleGainClick}>gain</Button>
            </FormGroup>
        </div>
    );
}

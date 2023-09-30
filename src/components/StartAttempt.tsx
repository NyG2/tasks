import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);

    function startQuiz(): void {
        setQuiz(true);
        setValue(value - 1);
    }

    function stopQuiz(): void {
        setQuiz(false);
    }

    function mulligan(): void {
        setValue(value + 1);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={quiz || value === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quiz}>
                Mulligan
            </Button>
            {value}
        </div>
    );
}

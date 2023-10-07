import React, { useState } from "react";
import { FormGroup, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // Initialize state to represent the user's currently selected choice
    const [currChoice, setCurrChoice] = useState<string>(options[0]);

    // Function to handle user's selection
    const handleSelectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCurrChoice(event.target.value);
    };

    // Determine if the user's answer is correct or not
    const isCorrect = currChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup>
                <FormSelect value={currChoice} onChange={handleSelectionChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>
            {isCorrect ? <p>✔️ Correct</p> : <p>❌ Incorrect</p>}
        </div>
    );
}

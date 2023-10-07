import React, { useState } from "react";
import { Form, FormGroup, FormCheck } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <FormGroup>
                <FormCheck
                    type="switch"
                    id="editModeSwitch"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
            </FormGroup>

            {isEditMode ? (
                <div>
                    <Form.Group>
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="studentCheckbox"
                            label="Student"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}

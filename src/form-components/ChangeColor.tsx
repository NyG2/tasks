import React, { useState } from "react";
import { FormGroup } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "purple",
        "lightgreen",
        "cyan",
        "magenta",
        "maroon",
        "orchid"
    ];
    const [color, setColor] = useState<string>(""); // Initialize with an empty string
    const handleColorChange = (newColor: string) => {
        setColor(newColor);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <FormGroup>
                {colors.map((c, index) => (
                    <label key={index} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            value={c}
                            checked={color === c}
                            onChange={() => handleColorChange(c)}
                        />
                        <div
                            className="color-box"
                            style={{
                                backgroundColor: c
                            }}
                        />
                    </label>
                ))}
            </FormGroup>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color
                }}
            >
                {color}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor(props: {
    colorIndex: number;
    onClick: () => void;
}): JSX.Element {
    const { onClick } = props;

    return <Button onClick={onClick}>Next Color</Button>;
}

function ColorPreview(props: { color: string }): JSX.Element {
    const { color } = props;

    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function getNextColorIndex() {
        return (colorIndex + 1) % COLORS.length;
    }

    function changeColor() {
        setColorIndex(getNextColorIndex());
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    onClick={changeColor}
                ></ChangeColor>
                <ColorPreview color={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}

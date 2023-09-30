import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setDice1] = useState<number>(2); // Both dices cant have the same value.
    const [d2, setDice2] = useState<number>(5);

    function rollLeft(): void {
        setDice1(d6());
    }
    function rollRight(): void {
        setDice2(d6());
    }
    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <div>
                <span data-testid="left-die">{d1}</span>
                <span data-testid="right-die">{d2}</span>
            </div>
            <div>
                {d1 === d2 && d1 === 1 ? <span>Lose</span> : <span></span>}
                {d1 === d2 && d1 !== 1 ? <span>Win</span> : <span></span>}
            </div>
        </div>
    );
}

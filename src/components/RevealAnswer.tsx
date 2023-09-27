import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setvisible] = useState<boolean>(true);

    function invertVisibility(): void {
        setvisible(!visible);
    }
    return (
        <div>
            <Button onClick={invertVisibility}>Reveal Answer</Button>
            {!visible && <div>42</div>}
        </div>
    );
}

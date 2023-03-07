import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Change the visibility to the opposite of previous
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={() => flipVisibility()}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}

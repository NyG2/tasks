import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "👻" | "🦃" | "🍩" | "😴";
    const holidays: Record<Holiday, string> = {
        "🎄": "Christmas",
        "👻": "Halloween",
        "🦃": "Thanksgiving",
        "🍩": "National Donut Day",
        "😴": "World Sleep Day"
    };

    function getNextAlphabetical(current: Holiday): Holiday {
        const keys = Object.keys(holidays) as Holiday[];
        const currentIndex = keys.indexOf(current);
        const nextIndex = (currentIndex + 1) % keys.length;
        return keys[nextIndex];
    }

    function getNextByYear(current: Holiday): Holiday {
        const yearOrder: Record<Holiday, Holiday> = {
            "😴": "🍩",
            "🍩": "👻",
            "👻": "🦃",
            "🦃": "🎄",
            "🎄": "😴"
        };

        return yearOrder[current];
    }

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎄");

    const advanceAlphabetical = () => {
        const nextHoliday = getNextAlphabetical(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    const advanceByYear = () => {
        const nextHoliday = getNextByYear(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    return (
        <div>
            <Button onClick={advanceAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
            <div>
                {"Holiday: "}
                {holidays[currentHoliday]} {currentHoliday}
            </div>
        </div>
    );
}

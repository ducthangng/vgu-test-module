import React, { useEffect, useState, useRef } from "react";
import TestNav from "./TestNav";

export default function TestLayout() {
    let totalTime = 10;
    const [timeLeft, setTimeLeft] = useState<string>("");
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

    const countdown = () => {
        if (totalTime<=0) {
            totalTime-=1;
            submitTest();
            return;
        }
        totalTime -= 1;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime - minutes * 60;
        const minutesString = minutes.toString().padStart(2, '0');
        const secondsString = seconds.toString().padStart(2, '0'); 
        setTimeLeft( minutesString + ":" + secondsString);
    }

    useEffect(() => {
        if (!intervalId) {
            setIntervalId(window.setInterval(() => {
                if (totalTime>=0) {
                    countdown();
                }
            }, 1000));
        }
        return () => clearTimeout(intervalId);
    }, [timeLeft]);

    const submitTest = (event? : React.MouseEvent<HTMLElement>) => {
        event?.preventDefault();
        console.log('submit!');
    }

    return (
        <div className="App" style={{alignItems: "center", justifyContent: "center", display: "flex", justifyItems: "center", padding:30, backgroundColor: "gray"}}>
            <TestNav 
                fullName="Nghi"
                studentId="18242"
                testPart="Listening"
                timeLeft={timeLeft}
                submitTest={submitTest}/>
        </div>
    );
}
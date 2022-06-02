import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockPropsType = {
    mode: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('tick');
        const interval = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => (clearInterval(interval))

    }, [])


    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>{view}</div>
}



import {useEffect, useState} from "react";

export type ClockPropsType = {}

const getDate = (num: number) => num < 10 ? '0' + num : num

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


    return <div>
        <span>{getDate(date.getHours())}</span>
        :
        <span>{getDate(date.getMinutes())}</span>
        :
        <span>{getDate(date.getSeconds())}</span>
    </div>
}
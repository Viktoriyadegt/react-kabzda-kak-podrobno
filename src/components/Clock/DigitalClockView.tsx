import React from "react";

export type ClockViewPropsType = {
    date: Date
}

export const getDate = (num: number) => num < 10 ? '0' + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getDate(date.getHours())}</span>
        :
        <span>{getDate(date.getMinutes())}</span>
        :
        <span>{getDate(date.getSeconds())}</span>
    </>
}
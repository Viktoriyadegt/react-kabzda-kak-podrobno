import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
    //component: Accordion
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [counter, setCounter] = useState(0);
    const [face, setFace] = useState(0);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect every render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {face}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFace(face + 1)}>face +</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(0);
    const [face, setFace] = useState(0);

    useEffect(() => {
        console.log('useEffect every render');
        setTimeout(() => {
            document.title = counter.toString();
        }, 2000)
    })


    return <>
        Hello, {counter} {face}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFace(face + 1)}>face +</button>
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect every render');
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, {counter}

    </>
}

export const Clock = () => {
    console.log('Clock')
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        console.log('useEffect every render');
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const stringTime = date?.toLocaleTimeString()
    //const stringDate = date?.toLocaleDateString()
    return <>
        {stringTime}
       {/* {stringDate}*/}

    </>
}



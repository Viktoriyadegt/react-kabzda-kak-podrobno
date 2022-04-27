
import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
    //component: Accordion
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [counter, setCounter] = useState(0);
    const [face, setFace] = useState(0);

    useEffect(()=>{
        console.log('useEffect every render');
        document.title = counter.toString();
    })

     useEffect ( ()=> {
        console.log('useEffect only first render')
        document.title = counter.toString()
    },[])

     useEffect (() => {
        console.log('useEffect every render and every counter change')
        document.title = counter.toString()
    },[counter])

    return <>
       Hello, {counter} {face}
        <button onClick={()=>setCounter(counter + 1)}>counter +</button>
        <button onClick={()=>setFace(face + 1)}>face +</button>
    </>
}



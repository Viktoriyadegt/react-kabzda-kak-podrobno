
import React, {useState} from "react";

export default {
    title: 'UseState demo',
    //component: Accordion
}

function generateData () {
    return 2345678909876543
}



export const Example = () => {
    const [counter, setCounter] = useState(generateData)

  /*  const changer = (state:number) => {
        return state + 1
    }*/

    return <>
        <button onClick={()=>setCounter(state => state + 1)}>+</button>{counter}
    </>
}



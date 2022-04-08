
import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo',
    //component: Accordion
}




export const DifficultCountingExample = () => {
    console.log('DifficultCountingExample')
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1;
        for(let i = 1; i <= a; i++) {
            let face = 0;
            while (face < 100000000) {
                face++;
                const takeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    },[a]);


    for (let i = 1; i <= b;i++) {
        resultB = resultB * i;
    }



    return <div>
        <input value={a} onChange={(e)=> setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=> setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </div>

}

const UsersSecrets = (props: {users: Array<string>}) => {
    console.log('users')
    return (
        <div>{props.users.map((m, i)=><div key={i}>{m}</div>)}</div>
    )
}
const Users = React.memo(UsersSecrets)


export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['vica', 'dasha', 'masha', 'joni'])

    const newArray = useMemo(()=>{
        const newArray = users.filter(f=>f.toLowerCase().indexOf('a') > - 1)
        return newArray
    },[users])

    const addUser= () => {
        const newUser = [...users, 'sveta' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}





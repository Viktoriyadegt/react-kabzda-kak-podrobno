import Accordion, {AccordionPropsType} from "../components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import React, {useState} from "react";

export default {
    title: 'React memo demo',
    //component: Accordion
}


const NewMessageCounter = (props: {counter:number}) => {
    return (
        <div>{props.counter}</div>
    )
}

export const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return (
        <div>{props.users.map((m, i)=><div key={i}>{m}</div>)}</div>
    )
}
const Users = React.memo(UsersSecret)


export const Example: Story = (args) => {
    console.log('exsample1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['vica', 'dasha', 'masha'])
    const addUser = () => {
        const newUser = [...users, 'sveta' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter counter={counter}/>
        <Users users={users}/>
    </>
}



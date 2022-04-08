import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Simulate} from "react-dom/test-utils";





export default {
    title: 'input',
    //component: input
}

export const UnControlledInput = () => <input/>

export const TrackValueOffUnControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChangeInput}/>-{value}</>
}

export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/> <button onClick={save}>save</button>-{value}</>
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue (e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue (e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange =(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue (e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
    </select>
}

export const ControlledWithFixedValueInput = () => <input value={'it-incubator'}/>

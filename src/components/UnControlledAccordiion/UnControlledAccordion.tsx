import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string

}


export function UnControlledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapse] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    console.log('Accordion rendering')


    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}


function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <ul/>
        </ul>
    )
}


export default UnControlledAccordion;
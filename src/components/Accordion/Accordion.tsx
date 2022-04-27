import React, {useState} from "react";
import {callbackify} from "util";


type ItemPropsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    collapsed: boolean
    item: ItemPropsType[]
    onClick: (value: any) => void

}


function Accordion(props: AccordionPropsType) {

    return (<div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
        </div>
    )
}

const Accordion0 = React.memo(Accordion)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
    )
}


type AccordionBodyPropsType = {
    item: ItemPropsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.item.map((m, index) => <li onClick={() => {
                props.onClick(m.value)
            }} key={index}>{m.title}</li>)}
        </ul>
    )
}


const callbackOnClick = () => alert('accordion change onClick')

const callback = () => alert('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion0 titleValue={'Menu'}
                                           onChange={callback}
                                           collapsed={true}
                                           item={[]} onClick={callbackOnClick}
/>
export const UsersUnCollapsedMode = () => <Accordion0 titleValue={'Users'}
                                              onChange={callback}
                                              collapsed={false}
                                              item={[
                                                  {title: 'vica', value: 1},
                                                  {title: 'dasha', value: 2},
                                                  {title: 'Misha', value: 3}]
                                              } onClick={callbackOnClick}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return  <Accordion0 titleValue={'Users'}
                       onChange={()=>setValue(!value)}
                       collapsed={value}
                       item={[
                           {title: 'vica', value: 1},
                           {title: 'dasha', value: 2},
                           {title: 'Misha', value: 3}]
                       } onClick={(value:any)=>{alert(`user with ${value} should be happy`)}}
    />
}

export default Accordion;
import {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(props.value)

    useEffect(()=>{
        setHoveredItem(props.value);
    }, [props.value])


    const selectItem = props.items.find(f => f.value === props.value)
    const hoveredItemValue = props.items.find(f => f.value === hoveredItem)
    const toggleItem = () => setActive(!active)
    const onItemChange = (value: any) => {
        props.onChange(value)
        toggleItem();
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp' ) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItem) {
                    const pretendentElement = e.key === 'ArrowDown'
                    ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            {/*<select>
                <option value="1">Kiev</option>
                <option value="2">Moscow</option>
                <option value="3">Minsk</option>
            </select>*/}
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0} >
                <span className={s.main} onClick={toggleItem}>{selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(m => <div
                            className={s.item + ' ' + (hoveredItemValue === m ? s.selected : '')}
                            onMouseEnter={()=>setHoveredItem(m.value)}
                            key={m.value}
                            onClick={() => onItemChange(m.value)}
                        >{m.title}
                        </div>)}
                    </div>
                }


            </div>
        </>

    )
}
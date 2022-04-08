import Accordion, {AccordionPropsType} from "../Accordion/Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import React, {useState} from "react";
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'Select',
    component: Select
}
const Select0 = React.memo(Select)

//const callback = action('value changed')
const Template: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(false)
   // const [hoveredItem, setHoveredItem] = useState(value)
    return <Select0 {...args} onChange={setValue} value={value} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
    ]}/>;
}
/*const callbacksProps = {
    onChange: callback,
    onClick: callback
}*/
export const WithValue = Template.bind({});
WithValue.args = {
    value: '2',
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
    ]
};
export const WithoutValue = Template.bind({});
WithoutValue.args = {
    value: null,
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
    ]
 };

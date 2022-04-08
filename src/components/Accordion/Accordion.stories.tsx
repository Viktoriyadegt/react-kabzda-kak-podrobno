import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
    onChange: callback,
    onClick: callback
}
export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    collapsed: true,
    titleValue: 'Menu',
    item: []
};
export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    collapsed: false,
    titleValue: 'Users',
    item: [
        {title: 'vica', value: 1},
        {title: 'dasha', value: 2},
        {title: 'Misha', value: 3}]
};

export const ModeAccordionChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState(false)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeAccordionChanging.args = {
    titleValue: 'Users',
    onClick: (value) => alert(`user with ID ${value} should be happy`),
    item: [
        {title: 'vica', value: 1},
        {title: 'dasha', value: 2},
        {title: 'Misha', value: 3}]
}




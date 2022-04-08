import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./unControlledOnOff";
import UnControlledAccordion from "../UnControlledAccordiion/UnControlledAccordion";



export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff

}
const UnControlledOnOff0 = React.memo(UnControlledOnOff)
   /* parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Header>;*/
const callback = action('on or off clicked')

export const OffMode = () => <UnControlledOnOff0  onChange={callback} defaultOn={false}/>
export const OnMode = () => <UnControlledOnOff0  onChange={callback} defaultOn={true}/>
export const InputMode = () => <input defaultValue={'NARUTO'}/>



/*
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};*/

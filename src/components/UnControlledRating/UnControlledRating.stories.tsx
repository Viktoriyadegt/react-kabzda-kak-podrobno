import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "../UnControlledOnOff/unControlledOnOff";



export default {
    title: 'UnControlledRating',
    component: UnControlledRating
}
   /* parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Header>;*/
const callback =  action('rating changed inside components')
const UnControlledRating0 = React.memo(UnControlledRating)

export const EmptyRating = () => <UnControlledRating0 defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnControlledRating0 defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControlledRating0 defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlledRating0 defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControlledRating0 defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControlledRating0 defaultValue={5} onChange={callback}/>



/*
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};*/

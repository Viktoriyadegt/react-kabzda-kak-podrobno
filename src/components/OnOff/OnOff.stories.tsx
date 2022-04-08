import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'OnOff',
    component: OnOff
}
   /* parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Header>;*/
const callback = action('on or off clicked')
const OnOff0 = React.memo(OnOff)

export const OffMode = () => <OnOff0 on={false} onChange={callback}/>
export const OnMode = () => <OnOff0 on={true} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return  <OnOff0 on={value} onChange={setValue}/>
}


/*
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};*/

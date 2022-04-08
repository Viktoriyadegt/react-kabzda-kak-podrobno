import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UnControlledAccordion from "./UnControlledAccordion";



export default {

    title: 'UnControlledAccordion',
    component: UnControlledAccordion
}
const UnControlledAccordion0 = React.memo(UnControlledAccordion)
   /* parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Header>;*/
const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <UnControlledAccordion0  titleValue={'Menu'} />



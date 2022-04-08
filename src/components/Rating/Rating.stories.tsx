import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating stories',
    component: Rating
}
   /* parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Header>;*/
const Rating0 = React.memo(Rating)

export const EmptyRating = () => <Rating0 value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating0 value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating0 value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating0 value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating0 value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating0 value={5} onClick={x=>x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return  <Rating0 value={rating} onClick={setRating}/>
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

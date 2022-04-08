import React, {useState} from 'react';
import './App.css';
import {MenuCollapsedMode, ModeChanging, UsersUnCollapsedMode} from "./components/Accordion/Accordion";
import { RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

import {UnControlledOnOff} from "./components/UnControlledOnOff/unControlledOnOff";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/input/input.stories";


function App() {
    let [onControlledCollapsed, setOnControlledCollapsed] = useState<boolean>(false)
    let [ratingControlled, setRatingControlled] = useState<RatingValueType>(0)
    let [onOffControlled, setOnOffControlled] = useState<boolean>(false)
    console.log('App rendering')
    return (
        <div>

            <OnOff on={onOffControlled} onChange={setOnOffControlled}/>

            <UnControlledOnOff onChange={setOnOffControlled}/> {onOffControlled.toString()}

            {/*<UnControlledAccordion titleValue={"Menu"}/>*/}
            {/*<Rating value={ratingControlled} onClick={setRatingControlled}/>*/}
         {/*   <Accordion titleValue={"Menu"}
                       collapsed={onControlledCollapsed}
                       onChange={() => setOnControlledCollapsed(!onControlledCollapsed)}
                       item={[]}
                       onClick={()=>console.log('ovhf')}
            />*/}
            <br/>
            <MenuCollapsedMode/>
            <br/>
            <UsersUnCollapsedMode/>
            <br/>
            <ModeChanging/>

            {/*<div><UnControlledInput/></div>
            <div><TrackValueOffUnControlledInput/></div>
            <div><ControlledWithFixedValueInput/></div>*/}
            <ControlledInput/>

            <br/>
            <ControlledCheckbox/>
            <br/>
            <ControlledSelect/>



           {/* <UnControlledRating/>*/}

            {/*   <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>

            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

function hello() {
    alert('Hello IT-KAMASUTRA')
}





export default App;

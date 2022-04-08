import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducer should change value to opposite value', () => {

    //data
    const State: StateType = {
        collapsed: false
    }

    //action
const newState = reducer(State, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)
})
test('reducer should to change value to opposite value', () => {

    //data
    const State: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(State, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(false)
})
test('reducer should throw error because action type is incorrect', () => {

    //data
    const State: StateType = {
        collapsed: true
    }

    //action
   

    //expect
    expect(()=>{
        reducer(State, {type: 'FACE'})
    }).toThrowError()
})
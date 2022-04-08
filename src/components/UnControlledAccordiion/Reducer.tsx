export type ActionType = {
    type: string
}
 export type StateType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const StateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            return StateCopy
        default:
            throw new Error('Bad action type')
    }
}
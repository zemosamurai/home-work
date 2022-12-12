const initState = {
    isLoading: false,
}

export type InitialState = typeof initState

export const loadingReducer = (state = initState, action: LoadingActionType): InitialState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}



type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

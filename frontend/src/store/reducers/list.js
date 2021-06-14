export function listReducer(state, action) {
    switch(action.type) {
        case 'updateDesc':
            return { ...state, description: action.payload }
        case 'updateList':
            return { ...state, list: action.payload }
        default:
            return state
    }
}
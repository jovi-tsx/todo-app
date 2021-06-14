export function updateDesc(dispatch, description) {
    dispatch({ type: 'updateDesc', payload: description })
}

export function updateList(dispatch, list) {
    dispatch({ type: 'updateList', payload: list })
}
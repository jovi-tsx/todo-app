import { useState } from 'react'
import AppContext, { data } from './AppContext'

const Store = props => {
    const [state, setState] = useState(data)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            description: state.description,
            list: state.list,
            setDescription: desc => updateState('description', desc),
            setList: l => updateState('list', l)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store
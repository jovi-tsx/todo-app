import React, { useReducer } from 'react'
import AppContext, { data } from './AppContext'

import { reducer } from '../store'
import { updateDesc, updateList } from '../store/actions'

const Store = props => {
    const [state, dispatch] = useReducer(reducer, data)

    return (
        <AppContext.Provider value={{   
            description: state.description,
            list: state.list,
            setDescription: d => updateDesc(dispatch, d),
            setList: l => updateList(dispatch, l)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store
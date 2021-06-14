import React from 'react'

export const data = {
    description: '',
    list: []
}

const AppContext = React.createContext(data)
export default AppContext
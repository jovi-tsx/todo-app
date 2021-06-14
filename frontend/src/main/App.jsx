import Menu from "../components/layout/Menu"
import Content from "../components/layout/Content"

import { BrowserRouter as Router } from "react-router-dom"

import Store from '../data/Store'

const App = props => {
    return (
        <Store>
            <Router>
                <Menu />
                <Content />
            </Router>
        </Store>
    )
}

export default App
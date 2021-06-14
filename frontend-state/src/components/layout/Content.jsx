import { Switch, Route } from 'react-router-dom'
import Home from '../../views/Home'
import About from '../../views/About'
import NotFound from '../../views/NotFound'

const Content = props => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
)

export default Content
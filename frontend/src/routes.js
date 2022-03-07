import { Switch, Route } from 'react-router-dom'

// PAGES
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from './screens/ProductScreen'


export default (
    <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
    </Switch>
)
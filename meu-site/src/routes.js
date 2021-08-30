import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './react-routes/pages/Home'
import Sobre from './react-routes/pages/Sobre'
import Contato from './react-routes/pages/Contato'
import Produto from './react-routes/pages/Produto'
import NotFound from './react-routes/pages/NotFound'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={Sobre}/>
                <Route exact path="/contato" component={Contato}/>
                <Route path="/produto/:id" component={Produto}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
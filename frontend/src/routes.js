import React from 'react';
import { BrowserRouter, Switch, Route} from  'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {

    //<Switch> Deixa mais de um rota ser chamada ao mesmo tempo
    // path = url acessada pelo usuario
    //component = classe das configurações
    // exact = só vai chamar a rota se for exatamente igual a que esta em path. Por exemplo, no primeiro path só tem"/", mas todos os caminhos vao ter esta barra, então se coloca o exact para ser somente a "/" e nada mais depois
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Login}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/new" component={New}></Route>
            </Switch>
        </BrowserRouter>
    )
}
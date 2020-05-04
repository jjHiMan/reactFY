import React from 'react';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import ShowDetails from "./views/ShowDetails";
class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path={'/register'} component={Register}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/showDetails'} component={ShowDetails}></Route>
                    <Route path={'/'} component={Index}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;

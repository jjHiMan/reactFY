import React from 'react';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import Index from "./views/Index";
import Login from "./views/Login";
class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/'} component={Index}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;

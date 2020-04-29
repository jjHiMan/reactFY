import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  NavLink,
  Route
} from "react-router-dom"
import home from './views/home'
import theater from './views/theater'
import ticket from './views/ticket'
import my from './views/my'
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"} exact>首页</NavLink>|
        <NavLink to={"/theater"}>剧院</NavLink>|
        <NavLink to={"/ticket"}>票夹</NavLink>|
        <NavLink to={"/my"}>我的</NavLink>
      </nav>
      <Route path={"/"} exact component={home}></Route>
      <Route path={"/theater"} component={theater}></Route>
      <Route path={"/ticket"} component={ticket}></Route>
      <Route path={"/my"} component={my}></Route>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Itempage from './pages/Itempage';
import ItemDetailPage from './pages/ItemDetailPage';
import HomePage from './pages/HomePage';
function App(){
    return(
        <Router>
            <div>
                <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/shop" exact component={Itempage} />
                <Route path="/shop/items/:id" component={ItemDetailPage} />
                <Route path="/shop/testing" component={testing} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;

const testing = () =>{
    return <h1>testing</h1>
}
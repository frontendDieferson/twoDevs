import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import showcase from './showcase';
import blog from './blog';
import contato from './contato';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/showcase" component={showcase} />
            <Route path="/blog" component={blog} />
            <Route path="/contato" component={contato} />
        </Switch>
        </BrowserRouter>
 , document.getElementById('root'));
registerServiceWorker();

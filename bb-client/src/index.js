import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { BookList } from './components/BookList'
import { AddBook } from './components/AddBook'
import { UpdateBook } from './components/UpdateBook'



ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/view-all-books" component={BookList} />
                <Route path="/AddBook" component={AddBook} />
                <Route path="/UpdateBook/:id" component={UpdateBook} />
            </Switch>

        </BaseLayout>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

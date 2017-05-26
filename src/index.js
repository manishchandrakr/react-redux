import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
// adding css from bootstrap and own styles so that it will be rendered through webpack
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let store = configureStore();
store.dispatch(loadCourses());
render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('app'));

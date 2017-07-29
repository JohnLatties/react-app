//dependences
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//modules
import  Favorites from './pages/Favorites';
import  Todos  from './pages/Todos';
import  Layout from './pages/Layout';
import  Settings from './pages/Settings';

const app = document.getElementById('app');
ReactDom.render(<div></div>, app);
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('./styles/styles.scss')

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import App from './app';
//import Profile from './components/profile_page/profile'; //SAMPLE
//import Login from './components/accounts/login'; //OPTIONAL
import './assets/css/demo.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/sass/light-bootstrap-dashboard.scss';
import './assets/fonts/Pe-icon-7-stroke.eot';
import './assets/fonts/Pe-icon-7-stroke.svg';
import './assets/fonts/Pe-icon-7-stroke.ttf';
import './assets/fonts/Pe-icon-7-stroke.woff';
import './assets/img/beach_pr.png';
import './assets/img/logo.svg';

import registerServiceWorker from './registerServiceWorker';

// require('./assets/js/bootstrap-jquery-1.10.2.js');
// require('./assets/js/bootstrap-checkbox-radio-switch.js');
// require('./assets/js/bootstrap-notify.js');
// require('./assets/js/bootstrap-select.js');
// require('./assets/js/bootstrap-min.js');
// require('./assets/js/chartist.min.js');
// require('./assets/js/demo.js');
// require('./assets/js/light-bootstrap-dashboard.js');


ReactDOM.render(<App />, document.getElementById('toor'));
registerServiceWorker();

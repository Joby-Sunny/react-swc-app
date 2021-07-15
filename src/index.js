import React from 'react';
import ReactDOM from 'react-dom';
import './style.module.css';

import {App} from './components/App';

ReactDOM.hydrate(<App />, document.getElementById('root'));

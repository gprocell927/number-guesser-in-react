import React from 'react';
import { render } from 'react-dom';
import Application from './app.js';

require('./styles.scss');

render(<Application />, document.getElementById('application'));

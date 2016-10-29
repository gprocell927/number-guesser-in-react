import React from 'react';
import { render } from 'react-dom';

import SubmitButton from './submit-button.js';

require('./styles.scss');

render(<SubmitButton/>, document.getElementById('application'));

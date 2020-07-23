import React from 'react';
import ReactDOM from 'react-dom';

import TableForm from './index';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableForm />, div);
});
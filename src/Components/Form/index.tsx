import React from 'react';

import './Form.scss';

const TableForm = () => {
    return (
        <div className="TableForm">
            <input type="text" placeholder="Name" className="TableForm__input"/>
            <input type="text" placeholder="Surname" className="TableForm__input"/>
            <input type="text" placeholder="Age" className="TableForm__input"/>
            <input type="text" placeholder="City" className="TableForm__input"/>
            <button className="TableForm__button">Add</button>
        </div>
    )
};

export default TableForm;

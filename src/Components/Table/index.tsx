import React from 'react';

import './Table.scss';

const Table = () => {
    return (
        <div className="Table">
            <div className="buttons">
                <button className="button-copy">Copy table</button>
                <span className="button-delete">
                    <img src="btn_delete.svg" alt=""/>
                </span>
            </div>
            <table>
                <thead className="Table__head">
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>City</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="Table__body">
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Age</td>
                    <td>City</td>
                    <td className="Table__action">
                        <span className="Table__action--edit">Edit</span>
                        <span className="Table__action--delete">Delete</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;

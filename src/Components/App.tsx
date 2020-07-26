import React, { useState, useEffect } from 'react';

import './App.scss';
import Form from './Form';
import Table from './Table';
import {tableType} from '../Types/tableType';
import {tableService} from '../Services/TableService';

const App = () => {

    const [tables, setTables] = useState<tableType[]>([]);

    useEffect(() => {
        // @ts-ignore
        const subscriber = tableService.onTableEvent().subscribe((store: tableType[]) => {
            setTables(store);
        });

        return subscriber.unsubscribe;
    }, []);

    return (
        <div className="App">
            <Form />
            {
                tables.map(
                    ({index, data}) =>
                        <Table key={index}
                               tableIndex={index}
                               data={data} />)
            }
        </div>
    );
};

export default App;

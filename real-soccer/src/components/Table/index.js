import React from 'react';
import {Row} from "./Row";

import './styles.scss';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Table = () => (
    <table className='table striped'>
        <thead>
        <tr>
            <th colSpan="2">
                Player List
            </th>
        </tr>
        </thead>
        <tbody>
        {data.map((player, index) => (
            <Row key={index}/>
        ))}
        </tbody>
    </table>
);

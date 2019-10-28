import React from 'react';
import Row from "./Row";

import './styles.scss';

const data = [
    {
        id: 1,
        position: 'DEF',
        name: ' Lorem ipsum dolor sit amet'
    }, {

        id: 2,
        position: 'DEF',
        name: ' Lorem ipsum dolor sit amet'
    }, {

        id: 3,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    }
    , {

        id: 4,
        position: 'ATK',
        name: ' Lorem ipsum dolor sit amet'
    }
    , {

        id: 5,
        position: 'ATK',
        name: ' Lorem ipsum dolor sit amet'
    }
    , {

        id: 6,
        position: 'DEF',
        name: ' Lorem ipsum dolor sit amet'
    }
    , {

        id: 7,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    }
    , {

        id: 8,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    }
    , {

        id: 9,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    }

];

const Table = () => (
    <table className='table striped fixed'>
        <thead>
        <tr>
            <th colSpan="2">
                Player List
            </th>
        </tr>
        </thead>
        <tbody>
        {data && data.map((player) => (
            <Row key={player.id} {...player}/>
        ))}
        </tbody>
    </table>
);

export default Table;


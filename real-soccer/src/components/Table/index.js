import React from 'react';
import {IconButton} from "@material-ui/core";

import './styles.scss';
import Text from "../Text/Text";
import ImageNotDraggable from "../ImageNotDraggable";

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
    },
    {

        id: 10,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    },
    {

        id: 11,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    },
    {

        id: 15,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    },
    {

        id: 12,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    },
    {

        id: 13,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    },
    {

        id: 14,
        position: 'MED',
        name: ' Lorem ipsum dolor sit amet'
    }

];

const Table = () => (
    <div className={'payerList'}>
        <section className="payerList-header">
            <Text component={'h3'} fontSize={'18px'}>Player List</Text>
            <IconButton onClick={() => alert('add')}>
                <ImageNotDraggable width={'20px'} image={'USER_PLUS'}/>
            </IconButton>
        </section>
        <section className="payerList-body">
            <table className='table'>
                <tbody>
                {
                    data.map(row => (
                        <tr key={row.id}>
                            <td width={'20px'} className={row.position}>{row.position}</td>
                            <td>{row.name}</td>
                            <td width={'20px'}>
                                <IconButton onClick={() => alert('remove')}>
                                    <ImageNotDraggable width={'20px'} image={'MINIMUS'}/>
                                </IconButton>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </section>
    </div>
);

export default Table;


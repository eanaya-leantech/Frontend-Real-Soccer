import React from 'react';
import {IconButton} from "@material-ui/core";

import './styles.scss';
import Text from "../Text/Text";
import ImageNotDraggable from "../ImageNotDraggable";
import PlayerItem from "./PlayerItem";

const players = [
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

const PlayerList = () => (
    <div className={'payerList'}>
        <section className="payerList-header">
            <Text component={'h3'} fontSize={'18px'}>Player List</Text>
            <IconButton>
                <ImageNotDraggable width={'20px'} image={'USER_PLUS'}/>
            </IconButton>
        </section>
        <section className="payerList-body">
            <table className='table'>
                <tbody>
                {
                    players.map(player => (
                       <PlayerItem {...player} key={player.id}/>
                    ))
                }
                </tbody>
            </table>
        </section>
    </div>
);

export default PlayerList;


import React from 'react';
import {Box} from "@material-ui/core";
import ImageNotDraggable from "../ImageNotDraggable";
import Text from "../Text/Text";
import './styles.scss';

const MatchItem = () => (
    <Box className={'match-item'}>
        <ImageNotDraggable
            width={'100%'}
            height={'70%'}
            url={'https://www.estrelladigital.es/media/estrelladigital/images/2017/10/03/2017100313001757139.jpg'}
            className={'img'}
        />
        <section className={'match-info'}>
            <Text component={'h2'} className={'title'} fontSize={'22px'} fontWeight={'bold'}>
                Friendly matches
            </Text>
            <Text component={'p'} className={'text'}>
                play with friends or with other city teams.
            </Text>
        </section>
    </Box>
);

export default MatchItem;

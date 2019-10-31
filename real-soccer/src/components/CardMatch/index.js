import React from 'react';

import './styles.scss';
import ImageNotDraggable from "../ImageNotDraggable";
import {Box} from "@material-ui/core";

const CardMatch = () => (
    <Box className={'card-math'}>
        <ImageNotDraggable
            width={'100%'}
            height={'70%'}
            url={'https://www.estrelladigital.es/media/estrelladigital/images/2017/10/03/2017100313001757139.jpg'}
            className={'card-math-img'}
        />
        <section className={'card-math-info'}>
            <h2 className={'card-math-title mb-1'}>Friendly matches</h2>
            <p className={'card-math-text'}>
                play with friends or with other city teams.
            </p>
        </section>
    </Box>
);

export default CardMatch;

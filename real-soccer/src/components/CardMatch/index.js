import React from 'react';

import './styles.scss';
import ImageNotDraggable from "../ImageNotDraggable";

const CardMatch = () => (
    <div className={'card-math'}>
        <ImageNotDraggable
            image={'https://www.estrelladigital.es/media/estrelladigital/images/2017/10/03/2017100313001757139.jpg'}
            className={'card-math-img'}
        />
        <section className={'card-math-info'}>
            <h2 className={'card-math-title mb-1'}>Friendly matches</h2>
            <p className={'card-math-text'}>
                play with friends or with other city teams.
            </p>
        </section>
    </div>
);

export default CardMatch;

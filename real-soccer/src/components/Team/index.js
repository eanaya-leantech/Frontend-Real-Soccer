import React from 'react';

import './styles.scss'

const Team = () => (
    <div className="team">
        <section className="logo">
            <img src="" alt=""/>
        </section>
        <section className="info">
            <form action="">
                <input type="text" className="form-control mb-1" placeholder="New team"/>
                <textarea name="" className="form-control" placeholder="Description"/>
            </form>
        </section>
    </div>
);

export default Team;

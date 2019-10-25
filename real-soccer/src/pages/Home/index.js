import React from 'react';

import {Layout} from "../../components/Layout";
import {Team} from "../../components/Team";
import {Table} from "../../components/Table";
import {MenuTeam} from "../../components/MenuTeam";
import {Card} from "../../components/Card";

export default () => {
    return (
        <Layout>
            <section className="container">
                <section className="row-50">
                    <Team/>
                    <MenuTeam/>
                    <div className="section-rows" style={{height: '230px'}}>
                        <div className="row-33">
                            <Card/>
                        </div>
                        <div className="row-33">
                            <Card/>
                        </div>
                        <div className="row-33">
                            <Card/>
                        </div>
                    </div>
                </section>
                <section className="row-50">
                    <Table/>
                </section>
            </section>
        </Layout>
    )
};

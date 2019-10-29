import React from 'react';

import Layout from "../../components/Layout";
import Team from "../../components/Team";
import Table from "../../components/Table";
import MenuTeam from "../../components/MenuTeam";
import CardAdd from "../../components/CardAdd";

export default () => {
    return (
        <Layout>
            <section className="container-fluid">
                <section className="col-50">
                    <Team/>
                    <MenuTeam/>
                    <div className="row">
                        <div className="col-33">
                            <CardAdd add/>
                        </div>
                        <div className="col-33">
                            <CardAdd/>
                        </div>
                        <div className="col-33">
                            <CardAdd/>
                        </div>
                    </div>
                </section>
                <section className="col-50">
                    <Table/>
                </section>
            </section>
        </Layout>
    )
};

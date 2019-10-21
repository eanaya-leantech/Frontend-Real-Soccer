import React from 'react';

import {Layout} from "../../components/Layout";
import {Card} from "../../components/Card";

export default () => {
    return (
        <Layout>
            <secction className="container-fluid ">
                <section className="section-rows">
                    <div className="row-25">
                        <Card modify/>
                    </div>
                    <div className="row-25">
                        <Card modify/>
                    </div>
                    <div className="row-25">
                        <Card modify/>
                    </div>
                    <div className="row-25">
                        <Card modify/>
                    </div>
                </section>
            </secction>
        </Layout>
    )
};

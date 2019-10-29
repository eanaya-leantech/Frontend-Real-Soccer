import React from 'react';

import Layout from "../../components/Layout";
import CardMatch from "../../components/CardMatch";

export default () => {
    return (
        <Layout>
            <section className="container">
                    <div className="col-25">
                        <CardMatch/>
                    </div>
                    <div className="col-25">
                        <CardMatch/>
                    </div>
                    <div className="col-25">
                        <CardMatch/>
                    </div>
                    <div className="col-25">
                        <CardMatch/>
                    </div>
            </section>
        </Layout>
    )
};

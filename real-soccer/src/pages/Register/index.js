import React from 'react';

import Layout from '../../components/LayoutPreLogin';
import Register from "../../components/Register";

export default () => {
    return (
        <Layout>
            <section className="container">
                    <Register/>
            </section>
        </Layout>
    )
};

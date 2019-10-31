import React from 'react';
import {Grid} from "@material-ui/core";
import Loading from '../../components/Loading';

import Layout from "../../components/Layout";
import CardMatch from "../../components/CardMatch";

const Matches = () => {
    const data = [1, 2, 3, 4];
    return (
        <Layout>
            <Grid item md={11} container spacing={3}>
                {
                    data.map(item => (
                        <Grid item sm={12} md={3} key={item}>
                            <CardMatch/>
                        </Grid>
                    ))
                }
            </Grid>
        </Layout>
    )
};

export default Matches;

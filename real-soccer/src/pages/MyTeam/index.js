import React from 'react';
import {Grid} from "@material-ui/core";

import Layout from "../../components/Layout";
import CardMatch from "../../components/CardMatch";

export default () => {
    return (
        <Layout>
            <Grid container>
                <Grid item sm={12} md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet aspernatur, ea eius
                    eligendi enim error excepturi facilis in ipsa natus obcaecati repudiandae sit suscipit tempore
                    veniam! Consequatur, voluptates!
                </Grid>
                <Grid item sm={12} md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem laborum minus neque
                    reprehenderit! Adipisci atque consectetur eligendi est et facilis harum ipsa laudantium perferendis,
                    porro, sed temporibus ullam veniam.
                </Grid>
            </Grid>
        </Layout>
    )
};

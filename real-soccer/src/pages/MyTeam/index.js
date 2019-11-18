import React from 'react';
import {Grid} from "@material-ui/core";
import Layout from "../../components/Layout";
import AddTrophy from "../../components/AddTrophy";
import FormTeam from "../../components/FormTeam";
import NavbarTeam from "../../components/NavbarTeam";
import './styles.scss';
import PlayerList from "../../components/PlayerList";

const data = [1, 2, 3];

export default () => {
    return (
        <Layout>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <section className={'section-form'}>
                        <FormTeam/>
                    </section>
                    <section className={'section-nabvar'}>
                        <NavbarTeam/>
                    </section>
                    <section className={'section-trophy'}>
                        <Grid container justify={'space-between'} alignItems={'center'} spacing={2}>
                            {
                                data.map(item => (
                                    <Grid item sm={4} xs={12} key={item}>
                                        <AddTrophy/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </section>

                </Grid>
                <Grid item xs={12} md={6}>
                    <PlayerList/>
                </Grid>
            </Grid>
        </Layout>
    )
};

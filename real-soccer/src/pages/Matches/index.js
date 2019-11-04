import React from 'react';
import {Grid} from "@material-ui/core";

import Layout from "../../components/Layout";
import MatchItem from "../../components/MatchItem";

const Matches = () => {
    const data = [1, 2, 3, 4];
    return (
        <Layout>
           <div className="container">
               <Grid container spacing={3} className="h-100">
                   {
                       data.map(item => (
                           <Grid item sm={12} md={3} key={item}>
                               <MatchItem/>
                           </Grid>
                       ))
                   }
               </Grid>
           </div>
        </Layout>
    )
};

export default Matches;

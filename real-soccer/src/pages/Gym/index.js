import React from 'react'
import {Grid} from "@material-ui/core"

import Layout from "../../components/Layout"
import CarouselItem from "../../components/CarrouselItem"
import Text from "../../components/Text/Text"

import './styles.scss'

const Gym = () => (
    <Layout>
       <div className="gym-page">
           <Text component={'h1'}>Section 1</Text>
           <Grid
               className={'carousel-row'}
               container
               direction="row"
               justify="center"
               alignItems="center"
           >
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
           </Grid>

           <Text component={'h1'}>Section 2</Text>
           <Grid
               className={'carousel-row'}
               container
               direction="row"
               justify="center"
               alignItems="center"
           >
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
           </Grid>

           <Text component={'h1'}>Section 3</Text>
           <Grid
               className={'carousel-row'}
               container
               direction="row"
               justify="center"
               alignItems="center"
           >
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
           </Grid>
       </div>
    </Layout>
)

export default Gym

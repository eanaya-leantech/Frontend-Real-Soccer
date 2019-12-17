import React from 'react'
import {Card, CardMedia, Button} from "@material-ui/core"

import './style.scss'

const CarouselItem = () => (
   <Card className={'card'}>
       <CardMedia className={'card-img'}
       image={'https://via.placeholder.com/150x150'}
       />
       <Button className={'card-button'}>
           Buy
       </Button>
   </Card>
)

export default CarouselItem;

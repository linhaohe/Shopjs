import { Container, Typography } from '@material-ui/core';
import React from 'react';

function ItemDescription(props){
    console.log(props)
   return (<Container maxWidth='sm'>
        <Typography variant='h4'>{props.title}</Typography>
        <hr style={{border:"1px solid grey"}} />
        <Typography style={{color:"#B12704"}}>Price: ${props.price}</Typography>
        <Typography variant='h6'>About this item</Typography>
        <Typography>{props.description}</Typography>
    </Container>)
}

export default ItemDescription;
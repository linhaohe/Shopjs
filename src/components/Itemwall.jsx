import React from "react";
import Itembox from "./Itembox";
// import itemList from "./assets/items";
import { Grid} from "@material-ui/core";
import {Link} from 'react-router-dom';

function fixPrice(number) {
    return(Math.round(number * 100) / 100).toFixed(2);
}
function Itemwall({items}) {

    const itemList = items.map(item => ((
        <Grid item
            key={
                item.id
        }>
        <Link to={`/shop/items/${item.id}`} style={{textDecoration:'none'}}>
        <Itembox name={
                    item.title
                }
                price={
                    fixPrice(item.price)
                }
                regularPrice={
                    fixPrice(item.price)
                }
                imgUrl={
                    item.image
                }/>
                </Link>
                </Grid>
    )))
    return (
        <Grid container
            spacing={1}
            alignItems="stretch">
            {itemList}</Grid>
    );
}

export default Itemwall;

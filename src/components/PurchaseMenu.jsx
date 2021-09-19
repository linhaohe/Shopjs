import {
    Paper,
    Typography,
    makeStyles,
    Button,
    TextField
} from '@material-ui/core';
import React, {useState} from 'react';
const useStyle = makeStyles({
    root:{
        paddingLeft:43,
        paddingRight:18,
        marginBottom:14
    },
    paper:{
        boxShadow: 'none',
        marginTop:10,
        marginBottom:10
    }
    ,cartButton: {
        "background-color": "#FFD523",
        display: "block",
        width: "100%",
        marginBottom:6,
        marginTop:6
        
    },
    buyButton: {
        "background-color": "#FFB740",
        display: "block",
        width: "100%"
    }
})
function PurchaseMenu(props) {
    const [quantity, setQuantity] = useState(1);
    const classes = useStyle();

    const handleChange = (event) => {
        setQuantity(event.target.value);
    }
    return (
        <Paper variant="outlined" className={classes.root}>
        <Paper className={classes.paper}>
            <Typography style={
                {color: "#B12704"}
            }>Price: ${
                props.price
            }</Typography>
            <Typography>FREE delivery:
                <strong>Tomorrow</strong>
            </Typography>
            <Typography style={
                {color: "#007600"}
            }>In Stock.</Typography>
            <TextField select
                value={quantity}
                onChange={handleChange}
                SelectProps={
                    {native: true}
            }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>

            </TextField>
            <Button variant="contained" color="primary"
                className={
                    classes.cartButton
            }>Add to Cart</Button>
            <Button variant="contained" color="primary"
                className={
                    classes.buyButton
            }>Buy Now</Button>

        </Paper>
        </Paper>
    );
}

export default PurchaseMenu;

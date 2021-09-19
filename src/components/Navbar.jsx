import {
    AppBar,
    Button,
    Grid,
    Icon,
    makeStyles
} from "@material-ui/core";
import React from "react";
import headerIcon from "./assets/icon.png"
import {Link} from 'react-router-dom';
import ShoppingCart from "./ShoppingCart";

const useStyle = makeStyles({
    AppBar: {
        background: 'transparent',
        boxShadow: 'none',
        textAlign: 'center'
    },
    Media: {
        height: "100%",
        width: "100%"
    }
});
function Navbar() {
    const classes = useStyle();
    const pngIcon = (
        <Icon className={
            classes.Media
        }>
            <img alt="coco"
                src={headerIcon}/>
        </Icon>
    );
    return (
        <AppBar position="static"
            className={
                classes.AppBar
        }>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs>
                    <Link to="/">
                        <Button startIcon={pngIcon}/>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/shop"
                        style={
                            {textDecoration: 'none'}
                    }>
                        <Button>Shop</Button>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Button>GIFT</Button>
                </Grid>
                <Grid item xs>
                    {/* <Button>Cart</Button> */}
                    <ShoppingCart />
                </Grid>
                <Grid item xs>
                    <a href="https://linhaohe.github.io/CSS-Personal-website/"
                        style={
                            {textDecoration: 'none'}
                    }>
                        <Button>ABOUT ME</Button>
                    </a>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;

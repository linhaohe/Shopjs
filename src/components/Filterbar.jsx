import {
    MenuItem,
    MenuList,
    Paper,
    makeStyles,
    Typography,
    Grid,
    FormControl,
    Input,
    InputAdornment,
    Button
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
    paper: {
        width: 220,
        boxShadow: 'none'
    },
    title: {
        paddingLeft: 0,
        fontSize: 16
    },
    menuItem: {
        '&:hover': {
            backgroundColor: 'transparent',
            color: 'orange'
        },
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft:0
    },
    button: {
        height: "100%",
        width: "100%"
    },
})
function Filterbar({setFetchUrl}) {
    const classes = useStyle();
    const handleClick = (catagory)=>{
        setFetchUrl(`https://fakestoreapi.com/products/category/${catagory}`)
    }
    return (
        <Paper className={
            classes.paper
        }>
            <MenuList>
                <Typography className={
                    classes.title
                } style={{fontWeight:600}}>Price</Typography>
                <MenuItem className={
                        classes.menuItem
                    }
                    disableRipple={true}>
                    <Typography className={
                        classes.title
                    } onClick={()=>handleClick('electronics')}>Electronics</Typography>

                </MenuItem>
                <MenuItem className={
                        classes.menuItem
                    }
                    disableRipple={true}>
                    <Typography className={
                        classes.title
                    } onClick={()=>handleClick('jewelery')}>Jewelery</Typography>
                </MenuItem>
                <MenuItem className={
                        classes.menuItem
                    }
                    disableRipple={true}>
                    <Typography className={
                        classes.title
                    }>Men clothing</Typography>
                    
                </MenuItem>
                <MenuItem className={
                        classes.menuItem
                    }
                    disableRipple={true}>
                    <Typography className={
                        classes.title
                    }>Women clothing</Typography>
                </MenuItem>
                    <Grid container
                        spacing={1}>
                        <Grid item
                            xs={3}>
                            <FormControl fullWidth>
                                <Input id="lower" placeholder="Min"
                                    startAdornment={
                                        <InputAdornment
                                    position="start">$</InputAdornment>
                                    }/>
                            </FormControl>
                        </Grid>
                        <Grid item
                            xs={3}>
                            <FormControl fullWidth>
                                <Input id="upper" placeholder="Max"
                                    startAdornment={
                                        <InputAdornment
                                    position="start">$</InputAdornment>
                                    }/>
                            </FormControl>
                        </Grid>
                        <Grid item
                            xs={3}>
                            <Button className={
                                    classes.button
                                }
                                variant="outlined"
                                size="small">Go</Button>
                        </Grid>
                    </Grid>
            </MenuList>
        </Paper>
    )
}

export default Filterbar;

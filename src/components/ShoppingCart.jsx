import { Button,Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";

function ShoppingCart(){
    const [anchorEl,setAnchorEl] = useState(null);
    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }
    return (<div>
        <Button 
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
            Shopping Cart
        </Button>
        <Menu
         id="menu-appbar"
         anchorEl={anchorEl}
         getContentAnchorEl={null}
         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
         transformOrigin={{ vertical: "top", horizontal: "center" }}
         open={Boolean(anchorEl)}
         onClose={handleClose}>
         <MenuItem>
            I am one
         </MenuItem>
         <MenuItem>
            I am one
         </MenuItem>
         <MenuItem>
            I am one
         </MenuItem>
        </Menu>
    </div>);
}

export default ShoppingCart;
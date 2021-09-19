import React from "react";
import {Typography} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {CardActionArea} from "@material-ui/core";
import {CardMedia} from "@material-ui/core";
import {CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import 'fontsource-roboto';

const useStyle = makeStyles({
    root: {
        width:200,
        boxShadow: 'none',
    },
    media: {
        height: 140
    },
    discount: {
        display: "inline-block"
    },
    originPrice: {
        textDecoration: "line-through",
        display: "inline-block"
    }
});
function Itembox(props) {
    const classes = useStyle();
    
    return (<Card className={
        classes.root
    } >
        <CardActionArea>
            <CardMedia className={
                    classes.media
                }
                image={
                    props.imgUrl
                }
                title={
                    props.name
                }/>
            <CardContent>
                <Typography> {
                    props.name
                } </Typography>
                <Typography>
                    ${
                    props.price
                } </Typography>
             </CardContent>
        </CardActionArea>
    </Card>)
}

export default Itembox;

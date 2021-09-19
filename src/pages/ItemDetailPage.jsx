import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import ItemDescription from '../components/ItemDescription';
import PurchaseMenu from '../components/PurchaseMenu';
import {Card, CardMedia, makeStyles, Box} from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        width: 500
    },
    media: {
        height: 720

    },
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }
})

function ItemDetailPage({match}) {
    const [item, setItem] = useState({});
    const classes = useStyle();
    const fetchItems = async () => {
        await fetch(`https://fakestoreapi.com/products/${
            match.params.id
        }`).then(res => res.json()).then(json => setItem(json));
    }
    useEffect(() => {
        fetchItems();
    }, [])


    return (
        <div>
            <Navbar/>
            <div className={
                classes.page
            }>
                <Box display="flex" flexDirection="row"
                    p={1}>
                    <Box>
                        <Card className={
                            classes.root
                        }>
                            <CardMedia className={
                                    classes.media
                                }
                                component="img"
                                image={
                                    item.image
                                }/>
                        </Card>
                    </Box>
                    <Box><ItemDescription title={
                                item.title
                            }
                            description={
                                item.description
                            }
                            price={
                                item.price
                            }/></Box>
                    <Box><PurchaseMenu price={
                            item.price
                        }/></Box>
                </Box>
            </div>
        </div>
    );
}

export default ItemDetailPage;

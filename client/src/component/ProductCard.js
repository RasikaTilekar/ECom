import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from "framer-motion";

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Store/cartSlice';
import { addWish, removeWish } from '../Store/wishlistSlice';

function ProductCard({ data, wishlisted, setWishlistedID }) {

    const dispatch = useDispatch();

    const onWishlistHandller = () => {
        if (!wishlisted) {
            dispatch(addWish({ data }));
            setWishlistedID(prevState => [...prevState, data.id]);
        } else {
            dispatch(removeWish({ data }));
            setWishlistedID(prevState => prevState.filter(item => item !== data.id));
        }

    }

    return (
        <Card sx={{
            ":hover": {
                boxShadow: 6,
                transform: 'scale(1.05,1.1)',
            },
        }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '10px', width: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        INR: {data.price}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{
                    ":hover": {
                        boxShadow: 6,
                        transform: 'scale(1.05,1.1)',
                    },
                }} size="small" color="primary" variant='contained' onClick={() => dispatch(addItem({ data }))}>
                    Add to Cart
                </Button>

                <IconButton sx={{
                    ":hover": {
                        boxShadow: 6,
                        transform: 'scale(1.05,1.1)',
                    },

                }} onClick={onWishlistHandller} >

                    <FavoriteIcon style={{ color: wishlisted ? "red" : "gray", border: 1 }} />
                </IconButton>
            </CardActions>
        </Card >
    )
}

export default ProductCard
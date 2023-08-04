import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cartItem } from '../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Store/cartSlice';
import { Button, CardActionArea, Divider, Grid } from '@mui/material';

function CartProduct({ item, showRemoveButton }) {
    const cartItemData = useSelector(cartItem);
    const dispatch = useDispatch();
    console.log(item)
    return (

        <Card sx={{ display: 'flex', flexDirection: "column", padding: "1%", margin: "1%" }}>
            <Grid container sx={{ display: 'flex', flexDirection: "row" }}>
                <Grid item md={4} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={item.data.image}
                            sx={{ display: "flex", alignItems: "center", objectFit: "cover" }}
                            alt="Live from space album cover"
                        />
                    </CardActionArea>
                </Grid>
                <Grid item md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between" }} >
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {item.data.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            INR: {item.data.price}
                        </Typography>
                    </CardContent>
                    <Grid sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        {showRemoveButton && <Button size="small" color="error" variant='contained' onClick={() => dispatch(removeItem(item))} >
                            Remove
                        </Button>}
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ flexGrow: 1 }} />

        </Card>

    )
}

export default CartProduct
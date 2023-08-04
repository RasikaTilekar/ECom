import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Divider } from '@mui/material';
import Link from '@mui/material/Link';

import { useSelector, useDispatch } from 'react-redux';
import { removeWish } from '../Store/wishlistSlice'
import { addItem } from '../Store/cartSlice';
import CartProduct from './CartProduct';

function WishList() {
    const dispatch = useDispatch();
    const wishlistData = useSelector(state => state.wishlist)

    return (
        <Grid container sx={{ minHeight: "90vh", display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "stretch", marginTop: '3%' }}>
            {wishlistData.length > 0 ? (<Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "stretch", marginTop: '5%' }}>
                <Card sx={{ marginBottom: "10px" }}>{wishlistData.map(data => <>
                    <CartProduct item={data} showRemoveButton={false} />
                    <Divider />
                    <CardActions>
                        <Button size="small" color="error" variant='contained' onClick={() => dispatch(removeWish(data))} >
                            Remove
                        </Button>
                        <Button size="small" color="error" variant='contained' onClick={() => { dispatch(removeWish(data)); dispatch(addItem(data)) }} >
                            Add to cart
                        </Button>
                    </CardActions>
                    <Divider /></>
                )}
                </Card>
            </Grid>) : <Grid container sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                <Card style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderRadius: '10px', width: '50%', height: '50%', padding: "5%" }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg' style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} style={{ marginLeft: '50px', }}>
                        <Typography variant="h4" style={{ marginBottom: '10px' }}><strong>Your Wishlist is empty</strong></Typography>
                        <Link href='/' underline="hover" style={{ color: 'black', textTransform: 'none', marginRight: "50px" }}>Shop today's deals</Link>
                        <Button variant='contained' style={{ backgroundColor: '#fdd931', color: 'black', textTransform: 'none', marginRight: "20px", marginTop: '20px' }}>Sign in to your account</Button>
                        <Button variant='contained' style={{ backgroundColor: 'white', color: 'black', textTransform: 'none', marginTop: '20px' }}>Sign up</Button>
                    </Grid>
                </Card>

            </Grid>}
        </Grid>
    )
}

export default WishList
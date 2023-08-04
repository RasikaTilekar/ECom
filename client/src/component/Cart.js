import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Divider } from '@mui/material';
import Link from '@mui/material/Link';
import { cartItem } from '../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Store/cartSlice';
import CartProduct from './CartProduct';
import Constants from '../API/Constants'

function Cart() {
    const [totalAmount, setTotalAmount] = useState(0)
    const cartItemData = useSelector(cartItem);
    const dispatch = useDispatch();

    useEffect(() => {
        let total = cartItemData.reduce((acc, current) => {
            console.log(current)
            return acc += current.data.price;
        }, 0);
        setTotalAmount(total)
    }, [])

    return (
        <Grid container sx={{ spacing: 2, minHeight: "90vh", display: 'flex', flexDirection: "row", alignItems: 'flex-start', justifyContent: "flex-start" }}>

            {cartItemData.length > 0 ?
                <>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "stretch", marginTop: '5%' }}>
                        <Card>{cartItemData.map(item =>
                            <CartProduct item={item} showRemoveButton={true} />)}
                            <Divider />
                            <CardActions sx={{ justifyContent: "flex-end" }}>
                                <Button variant='contained' color='warning'>Place Order</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ ml: "10px", minHeight: "90vh", display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "stretch", marginTop: '5%' }}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6'><strong>PRICE DETAILS</strong></Typography>

                            </CardContent>
                            <Divider />
                            <Grid container sx={{ ml: '10px' }}>
                                <Grid item xs={8} md={8} style={{ marginTop: "5%" }}>
                                    Price ({cartItemData.length}items)
                                </Grid>
                                <Grid item xs={4} md={4} style={{ marginTop: "5%" }}>
                                    <Typography>
                                        ₹{totalAmount}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} md={8} style={{ marginTop: "5%" }}>
                                    <Typography>
                                        Sale Fee
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4} style={{ marginTop: "5%" }}>
                                    <Typography>
                                        ₹{Constants.salesFee}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} md={8} style={{ marginTop: "5%" }}>
                                    <Typography>
                                        Delivery Charges
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4} style={{ marginTop: "5%" }}>
                                    <Typography color="green">
                                        {Constants.deleveryCharge}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={12} style={{ marginTop: "5%" }}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={8} md={8} style={{ marginTop: "5%" }}>
                                    <Typography variant='body1'>
                                        <strong>Total Amount</strong>
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
                                    <Typography>
                                        ₹{Constants.salesFee + totalAmount}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Card>
                    </Grid >
                </>
                : <Grid container sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                    <Card style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderRadius: '10px', width: '50%', height: '50%', padding: "5%" }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg' style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} style={{ marginLeft: '50px', }}>
                            <Typography variant="h4" style={{ marginBottom: '10px' }}><strong>Your Cart is empty</strong></Typography>
                            <Link href='/' underline="hover" style={{ color: 'black', textTransform: 'none', marginRight: "50px" }}>Shop today's deals</Link>
                            <Button variant='contained' style={{ backgroundColor: '#fdd931', color: 'black', textTransform: 'none', marginRight: "20px", marginTop: '20px' }}>Sign in to your account</Button>
                            <Button variant='contained' style={{ backgroundColor: 'white', color: 'black', textTransform: 'none', marginTop: '20px' }}>Sign up</Button>
                        </Grid>
                    </Card>
                </Grid>
            }

        </Grid >
    )
}

export default Cart
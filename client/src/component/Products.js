import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Store/productSlice';

function Products() {
    const [wishlistedID, setWishlistedID] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.data);
    const wishListData = useSelector(state => state.wishlist);

    useEffect(() => {
        let wishID = wishListData.map(item => item.data.id);
        setWishlistedID(prevState => [...prevState, ...wishID])
        dispatch(getProducts());
    }, [])

    return (
        <Grid container id="main" sx={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
            {data?.length > 0
                ? data.map(item => {

                    return <Grid item xs={12} sm={6} md={3} lg={3} key={item.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginInline: '1.5%', marginBlock: '1.5%' }}>
                        <ProductCard data={item} wishlisted={wishlistedID.includes(item.id)} setWishlistedID={setWishlistedID} />
                    </Grid>
                })
                : <strong>'No data found'</strong>
            }
        </Grid>
    )
}

export default Products
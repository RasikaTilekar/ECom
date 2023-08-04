import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { getElectronicsData } from '../Store/electronicsSlice'

function Electronics() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.electronics.data)

    useEffect(() => {
        dispatch(getElectronicsData())
    }, [])

    return (
        <div style={{ marginTop: '100px', minHeight: "90vh" }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                {data?.length > 0
                    ? data.map(item => <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginInline: '10px', marginBlock: '10px' }}>
                        <ProductCard data={item} />
                    </Grid>)
                    : <strong>'No data found'</strong>
                }
            </Grid>
        </div>
    )
}

export default Electronics
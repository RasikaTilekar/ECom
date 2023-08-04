
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getJwelleryItems } from "../Store/jwellerySlice";

function Jwelery() {
    const dispatch = useDispatch();
    const jwelleryData = useSelector(state => state.jwellery.data);

    useEffect(() => {
        dispatch(getJwelleryItems())
    }, [])

    return (
        <div style={{ marginTop: '100px', minHeight: "90vh" }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                {jwelleryData?.length > 0
                    ? jwelleryData.map(item => <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginInline: '10px', marginBlock: '10px' }}>
                        <ProductCard data={item} />
                    </Grid>)
                    : <strong>'No data found'</strong>
                }
            </Grid>
        </div>
    )
}

export default Jwelery
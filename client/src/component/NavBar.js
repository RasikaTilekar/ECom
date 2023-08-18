import React, { useEffect, useState } from 'react';
import { Grid, AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'react-i18next';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge'
import { useNavigate } from 'react-router-dom'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import { getCategery } from '../Store/categerySlice';
import ShoppingCart from './ShoppingCart';
import LangugeSelection from './LangugeSelection';


const NavBar = () => {
    const navigate = useNavigate();

    const cartItemCount = useSelector(state => state.cart)

    const dispatch = useDispatch();
    const category = useSelector(state => state.category.data)
    const wishlistdata = useSelector(state => state.wishlist);

    const { t } = useTranslation();



    console.log("navbar rendered")

    useEffect(() => {
        dispatch(getCategery());
    }, [])

    const categoryHandller = (category) => {
        let categoryStr = category.split("'").join('').split(' ').join('')
        navigate(`/${categoryStr}`)
    }

    const productsHandller = () => {
        navigate('/')
    }

    const wishlistHandller = () => {
        navigate('/wishlist')
    }

    const cartHandller = () => {
        navigate('/cart')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "#131921" }}>
                <Toolbar>

                    <Typography variant='h4' color={'gold'} style={{ textTransform: "none" }} sx={{ typography: { sm: 'h3', xs: 'h5' } }}>
                        <strong>E  C  O  M</strong>
                    </Typography>

                    <Button variant='Text' onClick={productsHandller}>
                        <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }}>
                            {t('allproducts')}
                        </Typography>
                    </Button>

                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Box sx={{ minWidth: 120, color: "white", marginBlock: "1%" }}>
                        <LangugeSelection />
                    </Box>
                    <IconButton color="inherit" onClick={wishlistHandller}  >
                        <Badge badgeContent=' ' variant="dot" color='error' invisible={wishlistdata.length <= 0}>
                            <FavoriteBorderIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={cartHandller}>
                        <ShoppingCart cartItemCountLength={cartItemCount.length} />
                    </IconButton>
                </Toolbar>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', backgroundColor: "#232f3e", color: "white", }}>
                    <Grid container style={{ display: { xs: 'flex', md: 'none' }, backgroundColor: "#232f3e", color: "white", justifyContent: "flex-start", position: "relative" }}>
                        {category.length > 0 ? category.map((item, index) => <Grid item key={index}><Button variant='Text' onClick={() => categoryHandller(item)}>
                            {t(`${item}`)}
                        </Button></Grid>) : ''}
                    </Grid>
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
                    <Grid container style={{ display: { xs: 'flex', md: 'none' }, backgroundColor: "#232f3e", color: "white", justifyContent: "flex-start", position: "relative" }}>
                        <Accordion style={{ backgroundColor: "#232f3e", color: "white", width: "100%" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{t('Category')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {category.length > 0 ? category.map((item, index) => <Grid item key={index}><Button variant='Text' onClick={() => categoryHandller(item)} style={{ textTransform: "none" }}>
                                    {t(`${item}`)}
                                </Button></Grid>) : ''}
                            </AccordionDetails>
                        </Accordion>

                    </Grid>
                </Box>
            </AppBar>
            <Toolbar />
        </Box >
    )
}

export default NavBar
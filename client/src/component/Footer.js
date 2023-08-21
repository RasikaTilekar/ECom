
import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <Grid container sx={{ display: 'block', flexDirection: 'row', justifyContent: 'center', marginTop: '5%', backgroundColor: "#232f3e" }}>

            <Grid item xs={12} sx={{ cursor: "pointer", display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: "#37475a", color: "white", Width: "100vh", ":hover": { backgroundColor: "#43566E" } }}>
                <Box variant='text' style={{ textTransform: "none", color: "white", Width: "100vh", paddingTop: "1%", paddingBottom: "1%" }}>
                    <Link to="main" activeClass="active" spy={true} smooth={true} offset={-120} duration={500}>{t('gototop')}</Link>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                Footer
            </Grid>
        </Grid>

    )
}
export default Footer
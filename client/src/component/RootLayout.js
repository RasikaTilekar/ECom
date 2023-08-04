import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import Container from '@mui/material/Container';

import store from '../Store/Store'
import Footer from './Footer';

function RootLayout() {

    return (
        <div style={{ backgroundColor: "#E8E8E8", minHeight: "90vh" }}>
            <Provider store={store}>
                <NavBar />
                <Container >
                    <main>
                        <Outlet />
                    </main>
                </Container>
                <Footer style={{ backgroundColor: "#232f3e", minHeight: "40vh" }} />
            </Provider>
        </div>
    )
}

export default RootLayout
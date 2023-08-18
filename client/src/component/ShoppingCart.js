import React from 'react'
import Badge from '@mui/material/Badge'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


const ShoppingCart = React.memo(({ cartItemCountLength }) => {
    console.log('cart badge rendered ...')
    return (
        <Badge badgeContent={cartItemCountLength} style={{ backgroundColor: "black", color: "#fdd931" }}>
            <ShoppingCartSharpIcon />
        </Badge>
    )
})

export default ShoppingCart
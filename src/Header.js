import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";
import Drawer from './DrawerComp';
const PAGES = ["Products", "Services", "AboutUS", "ContactUS"]
function Header() {
  const [value, setValue] = useState()
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)
  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: '1.5rem', paddingLeft: '10%' }}>
                SHOPEE
              </Typography>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs sx={{ marginLeft: 'auto' }} textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                {
                  PAGES.map((page, index) => {
                    return (
                      <Tab key={index} label={page} component={Link} to={`/${page}`}/>
                    )

                  })
                }


              </Tabs>
              <Button sx={{ marginLeft: 'auto' }} variant="contained" component={Link} to={`/login`}>Login</Button>
              <Button sx={{ marginLeft: '10px' }} variant="contained" component={Link} to={`/signup`}>SignUp</Button>
            </>
          )}


        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Header
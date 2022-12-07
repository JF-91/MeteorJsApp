import { AppBar, Box, Toolbar, Grid, IconButton, Drawer, Button, Link, Typography, Avatar, Stack } from '@mui/material'
import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu';



export const NavBarApp = () => {
  
  const [open, setState] = useState(false);

  const toggleDrawer = (open:boolean) => (event:any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };




  return (
    <Box >
        <AppBar position='static' >
            <Toolbar >
            <IconButton 
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { xs: 'block', sm: 'none',}, }}>   
              <MenuIcon />
            </IconButton>

        {/* The outside of the drawer */}
              <Drawer
                
                anchor="left" //from which side the drawer slides in
                
                variant="temporary" //if and how easily the drawer can be closed

                open={open} //if open is true, drawer is shown
                
                onClose={toggleDrawer(false)} //function that is called when the drawer should close
                
                onPointerEnter={toggleDrawer(true)} //function that is called when the drawer should open
                >
                  
                  <Box sx={{ p: 2,  height: 1, backgroundColor: "#434242",}}>
                      <Button><Link ><Typography>About</Typography></Link></Button>
                  </Box>
              </Drawer>

              <Grid 
                container
                sx={{display:{ xl: 'block', md:' block', sm:'block',xs: 'none',}}} 
                >
                <Grid item>
                  <Box>

                    <IconButton >
                      <Avatar alt='John Rios' src='/johnR.jpg' />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item
                          >
                    <Stack direction='row' spacing={3} display='flex' justifyContent='center'alignItems='center'>
                      <Button variant='text'>
                        <Link href='/about' underline='none'>
                          <Typography color='white'>About</Typography>
                        </Link>
                      </Button>
                      <Button variant='text'>
                        <Link href='/contact' underline='none'>
                          <Typography color='white'>Contact</Typography>
                        </Link>
                      </Button>
                    </Stack>
                </Grid>
              </Grid>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

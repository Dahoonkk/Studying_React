import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { AcUnit, Notifications } from '@mui/icons-material'

const Header = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  })

  const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }))

  const Icons = styled("div")(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    }
  }))

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: {xs: "none", sm: "block"}}}>
          MUI
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" }}}/>
        <Search>
          <InputBase placeholder="search..."/>
        </Search>
        <Icons>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ bgColor: "gray"}}>N</Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useGlobalLogin } from "../../contexts/login-context";
import { NavLink, Link } from 'react-router-dom';

export default function AccountMenu() {

  const { userToken, logoutUser, userDetail } = useGlobalLogin()



  const logoutAction = () => {
    logoutUser()

  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 28, height: 28, position: 'relative', top: '-5px' }}> <img style={{ height: '30px', width: '30px' }} src="https://easydrawingguides.com/wp-content/uploads/2017/05/how-to-draw-naruto-featured-image-1200-772x1024.png" alt="" /> </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        className='menu'
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 25,
              height: 25,
              ml: 0.5,
              mr: 1,
              backgroundColor: '#0C2340'
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <NavLink to='/profile'  >
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
        </NavLink>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ color: '#0C2340' }} >
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ color: '#0C2340' }}  >
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        {userToken ?
          (<MenuItem onClick={logoutAction}>
            <ListItemIcon style={{ color: '#0C2340' }}  >
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>)
          :
          (<NavLink to='/sign' >
            <MenuItem onClick={handleClose}>
              <ListItemIcon style={{ color: '#0C2340' }}  >
                <Logout fontSize="small" />
              </ListItemIcon>
              sign
            </MenuItem>
          </NavLink>)}
      </Menu>
    </React.Fragment>
  );
}


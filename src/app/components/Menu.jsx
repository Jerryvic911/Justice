"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
         className='text-lg relative bottom-1 text-black font-Montserrat font-[450]'
      >
        More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href="/contact">
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
       
    <Link href="/Books">
    <MenuItem onClick={handleClose}>Books</MenuItem>
    </Link>
    
    <Link href="/map">
    <MenuItem onClick={handleClose}>Map</MenuItem>
    </Link>
        
      </Menu>
    </div>
  );
}

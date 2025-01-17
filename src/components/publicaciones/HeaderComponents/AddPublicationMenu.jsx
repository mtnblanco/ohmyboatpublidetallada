// components/BasicMenu.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CarFront,Ship,PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function AddPublicationMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
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
      >
        <div className="flex items-center">
          <PlusCircle height={20} width={20} className="mr-2" />
          {/*<span>Publicar</span>*/}
        </div>
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
        <Link href="/create/create-vehicle">
        <MenuItem onClick={handleClose}>
        <div className="flex items-center">
            <CarFront height={20} width={20} className="mr-2" />
            <span>Publicar vehículo</span>
          </div>
        </MenuItem>
        </Link>

        <Link href="/create/create-boat">
        <MenuItem onClick={handleClose}>
          <div className="flex items-center">
            <Ship height={20} width={20} className="mr-2" />
            <span>Publicar embarcación</span>
          </div>
        </MenuItem>
        </Link>

      </Menu>
    </div>
  );
}

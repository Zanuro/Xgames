import React, { useState, Fragment, useRef } from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";


const NavigationBarMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const userMenuId = "user-menu";
  const userMenu = (
    <Menu
      anchorEl={buttonRef.current}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={userMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={() => {
        setMenuOpen(false);
      }}
    >
      <MenuItem>
        {"Iniciar Sesion"}
      </MenuItem>

      <MenuItem>
        {"Registrarse"}
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <IconButton
        ref={buttonRef}
        edge="end"
        aria-label={"user account"}
        aria-controls={userMenuId}
        aria-haspopup="true"
        onClick={() => {
          setMenuOpen(true);
        }}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {userMenu}
    </Fragment>
  );
};

export default NavigationBarMenu;

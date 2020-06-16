import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

import NavigationBarMenu from '../../NavigationBar/NavigationBarMenu';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Inicio</NavigationItem>
        <NavigationItem link="/foro ">Foro</NavigationItem>
        <NavigationItem link="/newgame">Añadir Juego</NavigationItem>
        <NavigationItem link="/search">Buscador</NavigationItem>
        <NavigationItem link="/noticias">Noticias</NavigationItem>
    <li className={classes.UserProfile}><NavigationBarMenu /></li>
    </ul>
);

export default navigationItems;
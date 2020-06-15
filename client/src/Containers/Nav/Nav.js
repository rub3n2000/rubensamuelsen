import React, { useState, useEffect } from 'react';

import styles from './Nav.module.scss';

import NavigationItems from './NavigationItems/NavigationItems'
import Logo from './Logo/Logo';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from './SideDrawer/SideDrawer';

const Nav = ( props ) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const openDrawerHandler = () => {
        setShowSideDrawer(true);
    }
    return (
    <>
    <header className={styles.Navbar}>
    <DrawerToggle clicked={openDrawerHandler}/>
    <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
    <nav className={styles.DesktopOnly}>
    <NavigationItems/>
    </nav>
    </header>
    </>
)
}

export default Nav;
import React, { useState } from "react";

import styles from "./Nav.module.scss";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "./SideDrawer/SideDrawer";

const Nav = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const openDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const tempIsSticky = currPos.y < -window.innerHeight + 20;
      if (tempIsSticky !== isSticky) {
        setIsSticky(tempIsSticky);
      }
    },
    [isSticky],
    false,
    false,
    300
  );
  let classes = isSticky
    ? [styles.Navbar, styles.Sticky].join(" ")
    : [styles.Navbar].join(" ");

  return (
    <>
      <header className={classes}>
        <DrawerToggle clicked={openDrawerHandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <nav className={styles.DesktopOnly}>
          <NavigationItems SetPath={props.SetPath} />
        </nav>
      </header>
    </>
  );
};

export default Nav;

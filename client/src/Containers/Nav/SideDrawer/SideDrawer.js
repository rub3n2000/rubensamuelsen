import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop";

import styles from "./SideDrawer.module.scss";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav className={styles.NavItems}>
          <NavigationItems closed={props.closed} />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;

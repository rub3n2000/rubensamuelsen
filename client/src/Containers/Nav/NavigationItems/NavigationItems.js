import React from 'react';

import styles from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    
    return (
        <div className={styles.NavigationItems}>
        <NavigationItem closed={props.closed} link="#LandingPage"> Home </NavigationItem>
        <NavigationItem closed={props.closed} link="#About"> About </NavigationItem>
        <NavigationItem closed={props.closed} link="#Projects"> My Projects </NavigationItem>
        <NavigationItem closed={props.closed} link="#Contact"> Contact Me </NavigationItem>
        <div className={styles.LanguageButtons}>
        </div>
        </div>
    )
}

export default navigationItems;
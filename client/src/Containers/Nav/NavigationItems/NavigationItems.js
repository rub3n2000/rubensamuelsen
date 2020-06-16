import React from 'react';

import styles from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    
    return (
        <div className={styles.NavigationItems}>
        <NavigationItem link="/"> Home </NavigationItem>
        <NavigationItem link="/customers"> Customers </NavigationItem>
        <div className={styles.LanguageButtons}>
        </div>
        </div>
    )
}

export default navigationItems;
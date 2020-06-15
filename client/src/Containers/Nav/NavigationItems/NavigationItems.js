import React from 'react';

import styles from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    
    return (
        <div className={styles.NavigationItems}>
        <NavigationItem SetPath={props.SetPath} link="/"> Home </NavigationItem>
        <NavigationItem SetPath={props.SetPath} link="/customers"> Customers </NavigationItem>
        <div className={styles.LanguageButtons}>
        </div>
        </div>
    )
}

export default navigationItems;
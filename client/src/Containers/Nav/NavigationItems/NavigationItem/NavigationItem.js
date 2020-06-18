import React from 'react';

import styles from './NavigationItem.module.scss';

const navigationItem = ( props ) => {
    return (
        <div onClick={props.closed} className={styles.NavigationItem}>
            <a href={props.link}>{props.children}</a>
        </div>
    )
}

export default navigationItem;
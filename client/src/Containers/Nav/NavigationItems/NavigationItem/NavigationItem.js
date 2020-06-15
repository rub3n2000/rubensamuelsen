import React from 'react';

import styles from './NavigationItem.module.scss';

const navigationItem = ( props ) => {
    return (
        <div onClick={() => props.SetPath(props.link)} className={styles.NavigationItem}>
            <div className={styles.Link}>{props.children}</div>
        </div>
    )
}

export default navigationItem;
import React from 'react';

import styles from './Logo.module.scss';

const logo = ( props ) => {
    return (
        <div className={styles.Logo}>
           <a href="/"><img src={window.location.origin + props.imgsrc}/></a>
        </div>
    )
}

export default logo;
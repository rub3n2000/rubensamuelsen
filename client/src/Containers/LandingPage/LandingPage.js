import React from 'react';
import styles from './LandingPage.module.scss';

import Nav from '../Nav/Nav';

const LandingPage = ( props ) => {
    return(
        <>
        <Nav/>
        <div className={styles.Content}>
            <h4>Welcome!</h4>
        </div>
        </>
    )
}

export default LandingPage;
import React, { useState, useEffect } from 'react';
import styles from './Customers.module.scss';
import axios from 'axios';

import Nav from '../Nav/Nav';

const Customers = ( props ) => {
    
    const[customers, setCustomers] = useState();

    useEffect(() => {
        axios.get("api/customers").then((value) => {
            setCustomers(value.data);
        }).catch((e) => {
            console.log(e);
        });
    }, []);
    let customersDiv;
    if(customers !== undefined) {
    customersDiv = customers.map((customer) => {
        return(<div key={customer.id} className={styles.Customer}>{customer.firstName + " " + customer.lastName}</div>);
    });
    } else {
        customersDiv = <></>;
    }

    return(
        <>
        <Nav SetPath={props.SetPath}/>
        <div className={styles.Content}>
            {customersDiv}
        </div>
        </>
    )
}

export default Customers;
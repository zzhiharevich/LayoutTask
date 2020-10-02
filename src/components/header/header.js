import React from 'react';
import img from '../../assets/img/img.jpg';
import classes from './header.module.css';

const header = (props) => {

    let linkText = 'Call to action';

    return (
    <div className={classes.Header}>
        <img src={img} alt="Logo" />
    <a href='/'> {linkText} <p className={classes.Arrow}>&rarr;</p></a>
    </div>
    );
}

export default header;

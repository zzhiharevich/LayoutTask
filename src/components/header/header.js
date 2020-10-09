import React from 'react';

import classes from './header.module.scss';

const header = (props) => {

    let linkText = 'Call to action';

    return (
        <div className={classes.Header}>
            {props.image}
            <a className={classes.Link} href='/'> {linkText} <p className={classes.Arrow}>&rarr;</p></a>
        </div>
    );
}

export default header;

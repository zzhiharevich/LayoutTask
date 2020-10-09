import React from 'react';
import classes from './content.module.scss';

const content = (props) => {

    const text = 'Description goes here. IBMers have always strived to be essential and to make a difference. Now it\'s easier than ever to have positive social impact.'

    return (
        <div className={classes.Content}>
            <h1>Title goes here</h1>
            <div className={classes.TextContent}>
                <p>{text}</p>
                <button className={classes.Primary}>Primary button</button>
                <button className={classes.Secondary}>Secondary button</button>
            </div>
        </div>
    );
}

export default content;
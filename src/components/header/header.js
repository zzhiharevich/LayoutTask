import './header.scss';
import { ArrowRight16 } from '@carbon/icons-react';

import React from 'react';

const header = (props) => {

    let linkText = 'Call to action';

    return (
        <div className='bx--grid bx--grid--full-width header'>
            <div className='bx--row header'>
                    {props.image}
                    <a className='header__link' href='/'> {linkText} <p className='header__arrow'><ArrowRight16 /></p></a>
            </div>
        </div>
    );
}

export default header;
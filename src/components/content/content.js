import React from 'react';
import { Button } from 'carbon-components-react';
import './content.scss';

const content = (props) => {

    const text = 'Description goes here. IBMers have always strived to be essential and to make a difference. Now it\'s easier than ever to have positive social impact.'

    return (
        <div className='bx--grid page_content'>
            <div className='bx--row page_content__content'>
                <div className='bx--col-sm-4 bx--col-md-8 bx--col-lg-8 page_content__title'>
                    <h1>Title goes here</h1>
                </div>
                <div className='bx--col-sm-4 bx--col-md-8 bx--col-lg-8'>
                    <div className='bx--row page_content__content'>
                        <p className='page_content__text'>{text}</p>
                    </div>
                    <div className='bx--row page_content__button'>
                        <Button kind='primary'>Primaty button</Button>
                        <Button kind='secondary'>Secondary button</Button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default content;
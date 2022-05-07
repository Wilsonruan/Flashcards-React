import React from 'react';
import '../css/Bottom.scss';

function Bottom(props) {
    return (
        <div className='bottom-container'>
            <button className='prev-arrow' onClick={props.prevSlide} />
            <button className='next-arrow' onClick={props.nextSlide} />
        </div>
    )
}

export default Bottom;

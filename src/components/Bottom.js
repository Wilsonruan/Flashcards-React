import React, { useContext } from 'react';
import { FlashcardsContext } from './Provider';
import '../css/Bottom.scss';

function Bottom(props) {
    const context = useContext(FlashcardsContext)

    const nextSlide = () => { //Next Carousel button
        context.updateContext({
            current: context.current === context.items.length - 1 ? 0 : context.current + 1
        })
    };

    const prevSlide = () => { //Prev Carousel button
        context.updateContext({
            current: context.current === 0 ? context.items.length - 1 : context.current - 1
        })
    };
    
    return (
        <div className='bottom-container'>
            <button className='prev-arrow' onClick={prevSlide} />
            <button className='next-arrow' onClick={nextSlide} />
        </div>
    )
}

export default Bottom;

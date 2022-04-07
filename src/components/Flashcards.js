import React, { useContext } from 'react';
import { FlashcardsContext, GlobalFun } from './Provider';
import Carousel from "./Carousel"


function Flashcards(props) {

   const context = useContext(FlashcardsContext);
   const globalFun = useContext(GlobalFun);

  const onKeyDown = e => {
    if (context.inTransform) { // If in motion, stop user actions
      e.preventDefault();
      return;
    } else if (e.key === 'ArrowUp' || (e.key === 'ArrowLeft' && context.inBottom)) {
      globalFun.arrowNavigation(-1, e);
    } else if (e.key === 'ArrowDown' || (e.key === 'ArrowRight' && context.inBottom)) {
      globalFun.arrowNavigation(1, e);
    } else if (e.key === 'ArrowLeft') {
      context.updateContext({ 
        current: context.current === 0 ? context.items.length - 1 : context.current - 1,
        resetFlipped: true 
      });
      globalFun.setCurrentFocus(e);
    } else if (e.key === 'ArrowRight') {
      context.updateContext({ 
        current: context.current === context.items.length - 1 ? 0 : context.current + 1,
        resetFlipped: true
      });
      globalFun.setCurrentFocus(e);
    }
    if (context.lastPlayedAudio) globalFun.stopAudio();
  }

   return (

    <div className='flashcards-container' onKeyDown={onKeyDown}>
      <Carousel />
   </div>
        

  )
}

export default Flashcards;
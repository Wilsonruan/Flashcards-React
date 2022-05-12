import React, { useContext, useState } from 'react';
import { FlashcardsContext } from './Provider';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';

function Carousel(props) {

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
    <>
      <Top
        instruction={context.instruction}
      />
      {context.items.map((items, index) => {
        return (
          <>
            {index === context.current && ( //Carousel items will appear below:
              <div
                className={'carousel-container'}
              >
                <Card
                  src={items.img}
                  text={items.text}
                  answer={items.answer}
                  reduceMotion={props.reduceMotion}
                />
              </div>
            )}
          </>
        )
      })}
      <Bottom
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </>
  )
}

export default Carousel


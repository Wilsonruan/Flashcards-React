import React, { useContext, useState } from 'react';
import { FlashcardsContext } from './Provider';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';

function Carousel(props) {

  const [current, setCurrent] = useState(0)
  const context = useContext(FlashcardsContext)

  const nextSlide = () => { //Next Carousel button
    setCurrent(current === props.items.length - 1 ? 0 : current + 1);
    console.log(context.current)
  };

  const prevSlide = () => { //Prev Carousel button
    setCurrent(current === 0 ? props.items.length - 1 : current - 1);
  };

  return (
    <>
      <Top
        instruction={props.instruction}
      />
      {props.items.map((items, index) => {
        return (
          <>
            {index === current && ( //Carousel items will appear below:
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


import React, { useContext } from 'react';
import { FlashcardsContext } from './Provider';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';

function Carousel(props) {

  const context = useContext(FlashcardsContext)

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
                  items={items}
                  reduceMotion={props.reduceMotion}
                />
              </div>
            )}
          </>
        )
      })}
      <Bottom />
    </>
  )
}

export default Carousel


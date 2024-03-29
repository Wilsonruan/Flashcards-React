import React from 'react'

const Card = ({items, reduceMotion}) => {

    function flip(e) {
        // If OS animations have been disabled
        var cardContainer = e.currentTarget;
        const flipCardInner = cardContainer.children[0].children[0]
        if (reduceMotion) {
            // Add reduced motion toggle in here
        }
        cardContainer.classList.toggle("is-flipped");
        flipCardInner.classList.toggle("is-flipped");

    };
    return (
        <div
            className="flash-card-container"
            onClick={flip}
        >
            <button className="flip-card-btn">
                {/* container required to flip container and content together */}
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src={items.img[0]}
                            alt={items.img[1]}
                        />
                        <p>{items.text}</p>
                    </div>
                    {/* Content on the back of the card goes in flip-card-back */}
                    <div className="flip-card-back">
                        <p>{items.answer}</p>
                    </div>
                </div>
            </button>
        </div>

    )
}

export default Card

import React from 'react'
import sshi202a from "../img/sshi5_07.202a.svg"
import sshi202b from "../img/sshi5_07.202b.svg"
import sshi202c from "../img/sshi5_07.202c.svg"
import sshi202d from "../img/sshi5_07.202d.jpg"
import sshi202e from "../img/sshi5_07.202e.jpg"

const Card = (props) => {

    function flip(e) {
        // If OS animations have been disabled
        var cardContainer = e.currentTarget;
        const flipCardInner = cardContainer.children[0].children[0]
        if (props.reduceMotion) {
            // Add reduced motion toggle in here
        }
        cardContainer.classList.toggle("is-flipped");
        flipCardInner.classList.toggle("is-flipped");

    };
    if (sshi202e && sshi202d && sshi202c && sshi202b && sshi202a) {
        console.log("Hello")
    }
    return (
        <div
            className="flash-card-container"
            onClick={flip}
        >
            <button className="flip-card-btn curl-bottom-right">
                {/* container required to flip container and content together */}
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src={props.src}
                            alt={props.alt}
                        />
                        <p>{props.text}</p>
                    </div>
                    {/* Content on the back of the card goes in flip-card-back */}
                    <div className="flip-card-back">
                        <p>{props.answer}</p>
                    </div>
                </div>
            </button>
        </div>

    )
}

export default Card

import React from 'react'
import event1 from "./Images/Events/Codezinth.png";

const Events = () => {
  return (
   
    <div className="event-container">
    <div className="events">
      <h1> OUR EVENTS</h1>
      <div className="Events">
        <figure className="figuree">
          <figure>
            <img src={event1} alt="Codezenith" />
          </figure>
          <figcaption className="figcaptionn">
            CodeZenith : A coding Challenge by <b>AAROHAN</b>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>

  )
}

export default Events

import React, { Component } from 'react';

const PerfumeCard = (props) => {

return (
    <div className="five wide column">
      <div className="ui card">
      <div className="image">
        <img src={props.perfume.img} alt={props.perfume.name}/>
      </div>
      <div className="content">
        <p className="header">{props.perfume.name}</p>
        <div className="meta">
          <span className="date">{props.perfume.scent}</span>
        </div>
        <div className="description">
          {props.perfume.catchphrase}
        </div>
      </div>
      <div className="ui bottom attached button" onClick={() => {props.clickHandler ? props.clickHandler(props.perfume) : props.removeHandler(props.perfume)}}>
        <i className={props.clickHandler ? 'add icon' : 'remove icon'}></i>
        {props.clickHandler ? 'Add to Cart' : 'Remove From Cart'}
      </div>
    </div>
  </div>
  )
}

export default PerfumeCard;

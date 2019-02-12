import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ReviewForm from "./ReviewForm"
import ReviewContainer from '../Containers/ReviewContainer'

const PerfumeCard = (props) => {

return (
    <div className="five wide column">
      <div className="ui card">
      <div className="image perfume-image">
        <img src={`/images/${props.perfume.img}`} alt={props.perfume.name}/>
      </div>
      <div className="content">
        <p className="perfume-name"> Eau de {props.perfume.name}</p>
        <div className="meta">
          <span className="date">{props.perfume.scent}</span>
        </div>
        <div className="description">
          {props.perfume.catchphrase}
        </div>
        <div className="extra content">
          <p>
            <i className="dollar icon"></i>
            {props.perfume.price}.00
          </p>
        </div>
      </div>
      <div className="ui bottom attached button" onClick={() => {props.clickHandler ? props.clickHandler(props.perfume) : props.removeHandler(props.perfume)}}>
        <i className={props.clickHandler ? 'add icon' : 'remove icon'}></i>
        {props.clickHandler ? 'Add to Cart' : 'Remove From Cart'}
      </div>
      <Popup trigger={
        <div className="ui bottom attached button" onClick>
        <i className='add icon'></i> Add Review </div>} modal
        position="right center">
          <div>{<ReviewForm perfume={props.perfume} submitHandler={props.submitHandler}/>}</div>
      </Popup>

      <Popup trigger={
      <div className="ui bottom attached button">
        <i className='star icon'></i> View Reviews </div>} modal
      position="right center">
        <div>{<ReviewContainer perfume={props.perfume} />}</div>
      </Popup>
    </div>
  </div>
  )
}

export default PerfumeCard;

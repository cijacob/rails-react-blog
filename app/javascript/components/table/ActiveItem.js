import React, { Component } from 'react'
import Video from './Video'


const ActiveItem = (props) => {
  return(
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div className="text-center">
          <div className="card px-5">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <Video/>
                <div className="pt-4 pb-4">
                  <h4> {props.title} </h4>
                  <p> {props.description} </p>
                  <div className="cta wrapper">
                    <a onClick={props.handleVideoStatus} className="btn cta-btn">Regarder cette video</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItem
import React, { Component } from 'react'

const Jumbotron = () =>  {
  return(
    <section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h4>React chapitre 1</h4>
              <p>Lorem Ipsum dolores</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-centered">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/LpvMR4Wx35E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron
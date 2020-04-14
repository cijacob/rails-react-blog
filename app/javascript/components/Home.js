import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component{
  constructor(){
    super()

    this.state = {
      course_modules: [
        {id: 1, title: "React chapitre 1", description:"Lorem ipsum", active: false},
        {id: 2, title: "React chapitre 2", description:"Lorem ipsum", active: false},
        {id: 3, title: "React chapitre 3", description:"Lorem ipsum", active: false},
        {id: 4, title: "React chapitre 4", description:"Lorem ipsum", active: false},
        {id: 5, title: "React chapitre 5", description:"Lorem ipsum", active: false}
      ]
    }
  }
  
  render(){
    return(
      <div>
        <h3>My Home component</h3>
        <Jumbotron/>
      </div>
    )
  }
}

export default Home

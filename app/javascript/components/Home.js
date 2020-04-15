import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './table/Table'
import axios from 'axios'

class Home extends Component{
  constructor(){
    super()

    this.state = {
      course_modules: []
    }
  }

  componentDidMount(){
    axios.get('/episodes.json')
    .then( data => {
      debugger

      let result = []
      data.data.data.map((data) => {
        result.push({id: data.id, title: data.title, description: data.description, active: false})

        this.setState({course_modules: result})
      })
    })
    .catch( data => {
      debugger
    })
  }

  handleVideoStatus(item, event){
    event.preventDefault()
    let course_modules = [...this.state.course_modules]
    
    course_modules.map( data => {
      data.active = false
    })
    item.active = !item.active

    course_modules[ item.id - 1  ] = item
    this.setState({course_modules})
  }
  
  render(){
    return(
      <div>
        <h3 className="text-center">My Home component</h3>
        <Jumbotron/>
        <Table handleVideoStatus={this.handleVideoStatus.bind(this)} course_modules={this.state.course_modules}/>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'
import Item from './Item'
import ActiveItem from './ActiveItem'

class Table extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    const items = this.props.course_modules.map((data) => {
      let handleVideoStatus = this.props.handleVideoStatus.bind(this, data)
      return(
        data.active? 
        <ActiveItem handleVideoStatus={handleVideoStatus} key={data.id} title={data.title} description={data.description} /> :
        <Item handleVideoStatus={handleVideoStatus} key={data.id} title={data.title} description={data.description} />
      ) 
    })
    return(
      <div>
        <h2 className="text-center">React for Rails videos </h2>
        {items}
      </div>
    )
  }

}

export default Table
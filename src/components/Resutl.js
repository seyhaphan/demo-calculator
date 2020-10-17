import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
export default class Resutl extends Component {
   render() {
      return (
         <div>
            <h2>Result History</h2>
            <ListGroup>
               {this.props.result.map((res, index) => {
                  return <ListGroup.Item key={index}>{res}</ListGroup.Item>
               })}

            </ListGroup>
         </div>
      )
   }
}

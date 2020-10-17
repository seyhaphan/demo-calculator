import React, { Component } from 'react'
import FormCal from './components/FormCal'
import Resutl from './components/Resutl'

export default class App extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <FormCal></FormCal>
      </div>
    )
  }
}

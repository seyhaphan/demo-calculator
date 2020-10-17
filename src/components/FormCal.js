import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Resutl from './Resutl'
export default class FormCal extends Component {
   state = {
      value1: '',
      value2: '',
      sign: '+',
      result: [12, 15, 15, 10]
   }
   handleChange = e => this.setState({ [e.target.name]: e.target.value });

   handleSubmit = () => {
      const { sign: s, value1, value2 } = this.state;

      let result;
      if (s === "+") {
         result = Number(value1) + Number(value2)
      } else if (s === "-") result = value1 - value2
      else if (s === "*") result = value1 * value2
      else if (s === "/") result = value1 / value2
      else if (s === "%") result = value1 % value2
      this.setState({
         result: [
            ...this.state.result,
            result
         ]
      })
   }
   render() {
      return (
         <div className="row">
            <div className="col-md-3">

               <img style={{ width: "100%" }} src={"https://purepng.com/public/uploads/large/purepng.com-calculator-icon-android-lollipopsymbolsiconsgooglegoogle-iconsandroid-lollipoplollipop-iconsandroid-50-721522597141natii.png"} alt="" />
               <Form.Control type="text" name="value1" value={this.state.value1} onChange={this.handleChange} />
               <Form.Control type="text" name="value2" value={this.state.value2} onChange={this.handleChange} />

               <Form.Control as="select" name="sign" value={this.state.sign} onChange={this.handleChange}>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
                  <option value="%">%</option>
               </Form.Control>
               <button onClick={this.handleSubmit}>Submit</button>
            </div>
            <div className="col-md-3">
               <Resutl result={this.state.result} />
            </div>
         </div>
      )
   }
}


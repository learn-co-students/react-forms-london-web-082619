import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  sendData = (dataObj) => {
      this.setState({
        submittedData: dataObj
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sent to submittedData')
    let dataObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
      }
      this.sendData(dataObject)
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Form;
import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends React.Component{
    state = {
        firstName: "",
        lastName: ""
    }

    // handleFirstNameChange = event => {
    // this.setState({
    //     firstName: event.target.value
    //     })
    // }
        
    //      
    // handleLastNameChange = event => {
    //     this.setState({
    //     lastName: event.target.value
    //     })
    // }
     
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
        <Form
          formData={this.state}
        //   handleFirstNameChange={this.handleFirstNameChange}
        //   handleLastNameChange={this.handleLastNameChange}
            handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
        )
    }
}
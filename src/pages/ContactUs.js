import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
    email: '',
    industry: '',
    company: '',
    message: ''
	}
  }

render() {
 return(
   <div className="App">
    <label htmlFor="Contact Us" style={mystyle}> Contact Us </label>
   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

    <div className="form-group">
        <label htmlFor="name"> Name </label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>

    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>

    <div className="mc-field-group">
        <label htmlFor="industry">Industry</label>
        <select name="industry" id="mce-INDUSTRY">
         <option value=""></option>
         <option value="banks">Banks/Financial institutes,</option>
         <option value="Government">Government</option>
         <option value="Investors">Investors</option>
         <option value="Freight forwarders">Freight Forwarders</option>
         <option value="Other">Other</option>
        </select>
    </div>

    <div className="form-group">
        <label htmlFor="company">Company</label>
        <input type="company" className="form-control" aria-describedby="companyName" value={this.state.company} onChange={this.onCompanyChange.bind(this)} />
    </div>

    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="10" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>

    <button type="submit" className="btn btn-primary" startIcon={<CloudUploadIcon />}> Submit</button>
    </form>

    </div>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onIndustryChange(event) {
    this.setState({name: event.target.value})
    }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }
  onCompanyChange(event) {
    this.setState({company: event.target.value})
  }
   onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(event) {
}


export default, App;
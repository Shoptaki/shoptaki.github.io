import React from "react";
import Layout from "../components/layout";
import Recaptcha from "react-recaptcha";
import { loadReCaptcha } from 'react-recaptcha-google';

class App extends React.Component {
  captchaDemo

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      name: '',
      email: '',
      industry: '',
      company: '',
      message: '',
      isVerified: false
    }
  }

  componentDidMount() {
    loadReCaptcha();
    if (this.captchaDemo) {
      console.log("started, just a second...")
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }
recaptchaLoaded() {
    console.log('Captcha Loaded');
}

render() {
    return (
      <Layout>
      <div className="App" style={{textAlign: "center", alignItems: "center"}}>
        <label htmlFor="Contact Us" style={{fontWeight: "bold", fontSize: 45, color: "blue"}}> Contact Us </label>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

          <div className="form-group">
            <label htmlFor="name" style={{marginRight: 250}}> Name </label>
            <input type="text" className="form-control" value={this.state.name}
                   onChange={this.onNameChange.bind(this)} style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{marginRight: 200}}>Email Address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email}
                   onChange={this.onEmailChange.bind(this)} style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}/>
          </div>

          <div className="mc-field-group">
            <label htmlFor="industry" style={{width: 60}}>Industry</label>
            <select name="industry" id="mce-INDUSTRY" style={{marginRight: 45, borderRadius: 7}}>
              <option value=""></option>
              <option value="banks">Banks/Financial institutes</option>
              <option value="Government">Government</option>
              <option value="Investors">Investors</option>
              <option value="Freight forwarders">Freight Forwarders</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="company" style={{marginRight: 230}}>Company</label>
            <input type="company" className="form-control" aria-describedby="companyName" value={this.state.company}
                   onChange={this.onCompanyChange.bind(this)} style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}/>
          </div>

          <div className="form-group">
            <label htmlFor="message" style={{marginRight: 240}}>Message</label>
            <textarea className="form-control" rows="10" value={this.state.message}
                      onChange={this.onMessageChange.bind(this)} style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}/>
          </div>

          <button className="captcha" style={{marginRight: 10, fontSize: 20}}>Captcha</button>
          <button onClick={this.handleSubmit} type="submit" className="btn btn-primary"> Submit</button>

          <Recaptcha
            sitekey="6Ld0ELAZAAAAACu7fyKy2htAhJQCCbH71rO1k7g1"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />

          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer> </script>
        </form>
      </div>
      </Layout>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onIndustryChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onCompanyChange(event) {
    this.setState({ company: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    if (this.state.isVerified) {
    } else {
      alert('Please verify first')
    }
  }

}
export default App;

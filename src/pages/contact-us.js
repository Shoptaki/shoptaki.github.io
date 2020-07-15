import React from "react";
import Layout from "../components/layout";
import Recaptcha from "react-recaptcha";
import { loadReCaptcha } from 'react-recaptcha-google';
//import REACT_APP_MAILCHIMP_URL from "../../.env"
//import "../form-control.css";
import jsonp from "jsonp"


class Contact extends React.Component {
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
      companyName: '',
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
    const { status } = this.state;
    return (
      <Layout>
      <div className="App" style={{textAlign: "center", alignItems: "center"}}>
        <label htmlFor="Contact Us" style={{fontWeight: "bold", fontSize: 45, color: "#3F9CE5"}}> Contact Us </label>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

          <div className="form-group">
            <label htmlFor="name" style={{marginRight: 250}}> Name </label>

            <input type="text" value={this.state.name}

                   style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}
                   onChange={({ target }) => this.setState({ ['name']: target.value })}/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{marginRight: 200}}>Email Address</label>

            <input type="email" aria-describedby="emailHelp" value={this.state.email}

                   onChange={({ target }) => this.setState({ ['email']: target.value })}
                   style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}
            />
          </div>

          <div className="mc-field-group">
            <label htmlFor="industry" style={{marginRight: 230}}>Industry</label>
            <div></div>
            <select
              name="industry"
              id="mce-INDUSTRY"
              style={{marginRight: "auto", marginLeft: "auto", borderRadius: 7, width: 300}}
              onChange={({ target }) => this.setState({ ['industry']: target.value })}>
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
            <input type="text" className="form-control" aria-describedby="companyName" value={this.state.company}
                   onChange={({ target }) => this.setState({ ['companyName']: target.value })}
                   style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}/>
          </div>

          <div className="form-group">
            <label htmlFor="message" style={{marginRight: 240}}>Message</label>
            <textarea className="form-control" rows="10" value={this.state.message}
                      onChange={({ target }) => this.setState({ ['message']: target.value })}
                      style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: 10}}/>
          </div>

          <div style={{marginLeft: 810}}>
            <Recaptcha
              sitekey="6Ld0ELAZAAAAACu7fyKy2htAhJQCCbH71rO1k7g1"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            />
          </div>

          <button style={{marginTop: 10}}
                  disabled={status === "sending" || status === "success"}
                  type="submit"
                  className="btn btn-primary"> Submit</button>
          <div className='msg-alert'>
            {status === "sending" && <p >Sending</p>}
            {status === "success" && <p>Thank you for contacting!</p>}
            {status === "duplicate" && <p>Too many subscribe attempts for this email address</p>}
            {status === "empty" && <p>You must write an e-mail.</p>}
            {status === "error" && <p>An unexpected internal error has occurred.</p>}
          </div>

        </form>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer> </script>
      </div>

      </Layout>
    );
  }


  handleSubmit(event) {
    if (this.state.isVerified) {
    } else {
      alert('Please verify you are human.')
    }
    event.preventDefault();
    const values = `name=${encodeURIComponent(this.state['name'])}&` +
        `EMAIL=${encodeURIComponent(this.state['email'])}&` +
        `industry=${encodeURIComponent(this.state['industry'])}&` +
        `company=${encodeURIComponent(this.state['companyName'])}&` +
        `message=${encodeURIComponent(this.state['message'])}`
    const path = `${process.env.REACT_APP_MAILCHIMP_URL}&${values}`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state['email'];
    (!regex.test(email)) ? this.setState({ status: "empty" }) : this.sendData(url);
  };

  sendData(url) {
    this.setState({ status: "sending" });

    console.log("URL: " + url);


    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: 'duplicate' });
      } else if (err) {
        console.log(err);
        this.setState({ status: 'error' });
      } else if (data.result !== 'success') {
        this.setState({ status: 'error' });
      } else {
        this.setState({ status: 'success' });
      };
    });
  }
}
export default Contact;

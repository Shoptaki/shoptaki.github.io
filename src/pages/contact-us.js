import React from "react";
import Layout from "../components/layout";
import Recaptcha from "react-recaptcha";
import { loadReCaptcha } from 'react-recaptcha-google';
import jsonp from "jsonp"
import SmartchainBanner from "../components/ParticleBanner";
import styled from "styled-components";
import {theme} from "../theme/GlobalStyles"



const MainDiv = styled.div `
   text-align: center;
   align-items: center; 
   display: flex;
   margin-left: 700px;
   @media (max-width: 1400px) {
    margin-left: 500px;
  }
   @media (max-width: ${theme.tablet}) {
    margin-left: 400px;
  }
   @media (max-width: 800px) {
    margin-left: 300px;
  }
  @media (max-width: 650px) {
    margin-left: 200px;
  }
   @media (max-width: 376px) {
    margin-left: 40px;
  }
`
const Input = styled.input `
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
   @media (max-width: 376px) {
    width: 200px
    margin-left: 0px
  }
`

const Select = styled.select `
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  width: 300px;
  height: 30px;

   @media (max-width: 376px) {
    width: 200px;
    margin-left: 0px;
  }
`

const TextArea = styled.textarea `
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`
const Button = styled.button `
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 120px;
  background-color: #3F9CE5;
`

const ContactLabel = styled.label `
  font-weight: bold; 
  font-size: 45px;
  color: #3F9CE5;
  margin-left: 750px;
   @media (max-width: 1400px) {
    margin-left: 550px;
  }
  @media (max-width: ${theme.tablet}) {
    margin-left: 450px;
  }
   @media (max-width: 800px) {
    margin-left: 350px;
  }
  @media (max-width: 650px) {
    margin-left: 250px;
  }
   @media (max-width: 375px) {
    margin-left: 90px;
  }
`

const NameLabel = styled.label `
  margin-right: 250px;
`

const EmailLabel = styled.label `
  margin-right: 200px;
`

const IndustryLabel = styled.label `
  margin-right: 230px;
`

const CompanyLabel = styled.label `
  margin-right: 230px;
`

const MessageLabel = styled.label `
  margin-right: 240px;
`

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
        <SmartchainBanner />
        <ContactLabel htmlFor="Contact Us"> Contact Us </ContactLabel>
        <MainDiv className="App">

          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

            <div className="form-group">
              <NameLabel htmlFor="name"> Name </NameLabel>

              <Input type="text" value={this.state.name}
                     onChange={({ target }) => this.setState({ ['name']: target.value })}/>
            </div>

            <div className="form-group">
              <EmailLabel htmlFor="exampleInputEmail1">Email Address</EmailLabel>

              <Input type="email" aria-describedby="emailHelp" value={this.state.email}
                     onChange={({ target }) => this.setState({ ['email']: target.value })}
              />
            </div>

            <div className="mc-field-group">
              <IndustryLabel htmlFor="industry">Industry</IndustryLabel>
              <div></div>
              <Select
                name="industry"
                id="mce-INDUSTRY"
                onChange={({ target }) => this.setState({ ['industry']: target.value })}>
                <option value=""></option>
                <option value="banks">Banks/Financial institutes</option>
                <option value="Government">Government</option>
                <option value="Investors">Investors</option>
                <option value="Freight forwarders">Freight Forwarders</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <div className="form-group">
              <CompanyLabel htmlFor="company">Company</CompanyLabel>
              <Input type="text" className="form-control" aria-describedby="companyName" value={this.state.company}
                     onChange={({ target }) => this.setState({ ['companyName']: target.value })}/>
            </div>

            <div className="form-group">
              <MessageLabel htmlFor="message">Message</MessageLabel>
              <TextArea className="form-control" rows="10" value={this.state.message}
                        onChange={({ target }) => this.setState({ ['message']: target.value })}/>
            </div>

            <div>
              <Recaptcha
                sitekey="6Ld0ELAZAAAAACu7fyKy2htAhJQCCbH71rO1k7g1"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
            </div>

            <Button
                    disabled={status === "sending" || status === "success"}
                    type="submit"
                    className="btn btn-primary"> Submit
            </Button>

            <div className='msg-alert'>
              {status === "sending" && <p >Sending</p>}
              {status === "success" && <p>Thank you for contacting!</p>}
              {status === "duplicate" && <p>Too many subscribe attempts for this email address</p>}
              {status === "empty" && <p>You must write an e-mail.</p>}
              {status === "error" && <p>Enter a valid email address</p>}
            </div>

          </form>
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer> </script>
        </MainDiv>

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
    // const path = `${process.env.REACT_APP_MAILCHIMP_URL}&${values}`;
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


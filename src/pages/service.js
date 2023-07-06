import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Service from "../components/Service"
import mobile from "../images/service/mobile.jpg"
import hireDedicatedDevelopers from "../images/service/hireDedicatedDevelopers.jpg"
import ai from "../images/service/ai.jpg"
import iot from "../images/service/iot.jpg"
import ui from "../images/service/uiux.jpg"
import securityIdentitySystem from "../images/service/securityIdentitySystem.jpg"
import webDeveloper from "../images/service/webDeveloper.jpg"
import styled from "styled-components"

const ServiceFluid = styled.div`
  padding: 0 0 50px 0;
`
const serviceData = [
  {
    image: ai,
    title: "AI & ML",
    discribe:
      "Harness the potential of Artificial Intelligence (AI) and Machine Learning (ML) with our cutting-edge solutions. Our AI-powered systems automate processes, analyze data for valuable insights, and deliver personalized experiences. From intelligent chatbots to predictive analytics, we help businesses leverage AI and ML to drive innovation and gain a competitive edge.",
  },
  {
    image: securityIdentitySystem,
    title: "Security & Identity System",
    discribe:
      "Leverage the power of Smartchain technology for enhanced security and identity management. Our innovative solutions utilize blockchain to provide tamper-proof authentication, secure data exchange, and decentralized identity verification. Protect your digital assets and ensure trust in your systems with our Smartchain-based security solutions.",
  },
  {
    image: iot,
    title: "IoT",
    discribe:
      "Unlock the power of the Internet of Things (IoT) with Shoptaki's comprehensive IoT solutions. We help businesses harness the potential of connected devices, data analytics, and automation to drive efficiency, enhance productivity, and create new revenue streams.",
  },
  {
    image: webDeveloper,
    title: "Web Development",
    discribe:
      "Transform your online presence with our expert web development services. Our team creates custom, user-friendly websites that drive results. From responsive designs to robust functionality, we have you covered. Let us bring your vision to life and help your business thrive online.",
  },
  {
    image: mobile,
    title: "Mobile Development",
    discribe:
      "Stay ahead in the mobile era with our exceptional mobile development services. Our skilled team of developers creates innovative and user-friendly mobile applications for iOS and Android platforms. We leverage the latest technologies to deliver seamless user experiences and cutting-edge functionalities. From concept to deployment, we ensure your mobile app stands out in the crowded marketplace, driving engagement and boosting your business growth.",
  },
  {
    image: ui,
    title: "UI / UX Designing",
    discribe:
      "Enhance your digital experiences with our expert UI/UX designing services. Our talented team of designers combines creativity and user-centric design principles to create visually stunning and intuitive user interfaces. We focus on understanding your target audience and their needs to craft engaging designs that drive conversions and customer satisfaction. From wireframing to prototyping, we ensure a seamless and delightful user experience across all platforms. Let us elevate your digital products with our exceptional UI/UX designs.",
  },
  {
    image: hireDedicatedDevelopers,
    title: "Hire Dedicated Developers",
    discribe:
      "Looking for skilled and dedicated developers to join your team? Shoptaki offers flexible and cost-effective solutions for hiring dedicated developers tailored to your specific project requirements. Our experienced developers are well-versed in various technologies and programming languages, ensuring high-quality deliverables and seamless collaboration.",
  },
]

const Mission = () => (
  <Layout>
    <SEO title="Service" />
    <ServiceFluid>
      {serviceData?.map((element, index) => {
        return (
          <Service
            key={index}
            image={element.image}
            format={index % 2 !== 0 ? "reverse" : ""}
            title={element.title}
            subContent={element.subContent}
            discribe={element.discribe}
          />
        )
      })}
    </ServiceFluid>
  </Layout>
)

export default Mission

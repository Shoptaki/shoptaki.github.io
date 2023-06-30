import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Service from '../components/Service';
import mobile from '../images/service/mobile.jpg';
import hireDedicatedDevelopers from '../images/service/hireDedicatedDevelopers.jpg';
import ai from '../images/service/ai.jpg';
import iot from '../images/service/iot.jpg';
import ui from '../images/service/uiux.jpg';
import securityIdentitySystem from '../images/service/securityIdentitySystem.jpg';
import webDeveloper from '../images/service/webDeveloper.jpg'
import styled from "styled-components";

const ServiceFluid = styled.div`
    padding: 0 0 50px 0;
`
const serviceData = [
    {
        image: ai,
        title: "AI & ML",
        discribe: "AI (Artificial Intelligence) and ML (Machine Learning) are technologies that enable machines to perform tasks that typically require human intelligence. AI refers to the broader concept of machines simulating human intelligence, while ML focuses on algorithms that allow machines to learn from data and improve performance over time. These technologies have applications in various fields, including automation, data analysis, pattern recognition, and decision-making."
    },
    {
        image: securityIdentitySystem,
        title: "Security & Identity System",
        discribe: "Introducing our new service, the Security and Identity System, powered by smartchain technology. With this cutting-edge solution, we offer robust security measures and advanced identity management capabilities for your organization. Our smartchain technology ensures tamper-proof and transparent record-keeping, safeguarding sensitive data and preventing unauthorized access. Seamlessly integrate this system into your existing infrastructure to enhance protection against cyber threats and streamline identity verification processes. Trust in our Security and Identity System to fortify your digital assets and provide peace of mind to your stakeholders."
    },
    {
        image: iot,
        title: "IoT",
        discribe: "IoT, or Internet of Things, is a network of interconnected physical devices that communicate and exchange data over the internet. It enables devices to collect and share information, leading to automation, improved efficiency, and new possibilities for monitoring and controlling various aspects of the physical world."
    },
    {
        image: webDeveloper,
        title: "Web Development",
        discribe: "Web development is the process of creating websites and web applications using programming languages like HTML, CSS, and JavaScript. It involves designing, building, and maintaining the various components that make up a website, including the user interface, functionality, and backend infrastructure."
    },
    {
        image: mobile,
        title: "Mobile Development",
        discribe: "Mobile development involves creating applications for smartphones and tablets. It includes developing native or cross-platform apps using languages like Swift, Java, or JavaScript. Mobile development focuses on designing user-friendly interfaces, optimizing performance, and integrating with device features to deliver engaging experiences on mobile devices."
    },
    {
        image: ui,
        title: "UI / UX Designing",
        discribe: "UI/UX design is about creating visually appealing and user-friendly digital experiences. It involves designing interfaces, user flows, and interactions that enhance usability and satisfaction. UI focuses on aesthetics and visual elements, while UX focuses on overall user experience, research, and usability testing."
    },
    {
        image: hireDedicatedDevelopers,
        title: "Hire Dedicated Developers",
        discribe: "When hiring dedicated developers, you can tap into a pool of skilled professionals who will work exclusively on your projects. These developers are committed to your goals, possess expertise in their respective fields, and provide seamless collaboration, resulting in high-quality and tailored solutions for your business."
    },
];

const Mission = () => (
    <Layout>
        <SEO title="Service" />
        <ServiceFluid>
        {
            serviceData?.map((element, index) => {
                return (
                    <Service
                        key={index}
                        image={element.image}
                        format={index % 2 !== 0 ? 'reverse' : ''}
                        title={element.title}
                        subContent={element.subContent}
                        discribe={element.discribe}
                    />
                )
            }
            )
        }
        </ServiceFluid>
    </Layout>
)

export default Mission;
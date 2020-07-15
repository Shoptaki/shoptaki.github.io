import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"
import Slogan from "../components/Slogan.jsx"

import Contact from "../components/ContactUsSection.jsx"

import DifferentiateCard from "../components/differentiateCard"
import FeatureCard from "../components/featureCard"

import AboutUsCards from "../components/AboutUsCards"
import AboutUsCardsMobile from '../components/AboutUsCardsMobile'


const WhySmartchain = () => (
    <Layout>
     
        <SEO title="Why Smartchain?" />
   
        <WhySmartchainBanner />

        <Slogan
            title="What is Smartchain?"
            description="Smartchain is a completely new type of technology. In the form of a multipurpose ecosystem, it revolutionizes concepts of blockchain with the help of collaborative artificial intelligence to bridge the gaps in effective management and implementation."
            color="orange"
        />

        <AboutUsCards />
        <AboutUsCardsMobile />

        <DifferentiateCard />
        <FeatureCard />

        <Contact />
    </Layout>
)

export default WhySmartchain;

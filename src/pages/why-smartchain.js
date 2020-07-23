import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"
import Slogan from "../components/Slogan.jsx"

import Contact from "../components/ContactUsSection.jsx"

import DifferentiateCard from "../components/differentiateCard.jsx"
import FeatureCard from "../components/featureCard.jsx"

import AboutUsCards from "../components/AboutUsCards.jsx"


const WhySmartchain = () => (
    <Layout>
     
        <SEO title="Why Smartchain?" />
<<<<<<< HEAD
   
        <WhySmartchainBanner 
            title="We are not blockchain."
            subtitle="We are the future."
            description="We are a system where collaborative AI meets quantum resisitance security. "/>
=======
        <WhySmartchainBanner 
        title = "We are not blockchain."
        subtitle = "We are the future."
        description = "We are a system where collaborative AI meets quantum resistance security."
        />
>>>>>>> c34945c45f83c5b2f4132d771df2dd3bf7ee7c70

        <Slogan
            title="What is Smartchain?"
            description="Smartchain is a completely new type of technology. In the form of a multipurpose ecosystem, it revolutionizes concepts of blockchain with the help of collaborative artificial intelligence to bridge the gaps in effective management and implementation."
            color="orange"
        />

        <AboutUsCards />
        <DifferentiateCard />
        <FeatureCard />

        <Contact />
    </Layout>
)

export default WhySmartchain;

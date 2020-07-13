import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"
import Slogan from "../components/slogan"

import DifferentiateCard from "../components/differentiateCard"
import FeatureCard from "../components/featureCard"

import AboutUsCards from "../components/AboutUsCards"
import AboutUsCardsMobile from '../components/AboutUsCardsMobile'


const WhySmartchain = () => (
    <Layout>
     
        <SEO title="Why Smartchain?" />
<<<<<<< HEAD
   
=======

>>>>>>> ea9ad6d207e2c784b70d678d2cebc69081fd2f21
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


<<<<<<< HEAD
        <AboutUsCards></AboutUsCards>
        <AboutUsCardsMobile></AboutUsCardsMobile>

=======
>>>>>>> ea9ad6d207e2c784b70d678d2cebc69081fd2f21
    </Layout>
)

export default WhySmartchain;

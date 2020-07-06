import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUsCards from "../components/AboutUsCards"
import AboutUsCardsMobile from '../components/AboutUsCardsMobile';

const WhySmartchain = () => (
    <Layout>
        <SEO title="Why Smartchain?" />
    
    <AboutUsCards></AboutUsCards>

    <AboutUsCardsMobile></AboutUsCardsMobile>
   
    </Layout>
)

export default WhySmartchain;
import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"


const WhySmartchain = () => (
    <Layout>
     
        <SEO title="Why Smartchain?" />
        <WhySmartchainBanner 
        title = "We are not blockchain."
        subtitle = "We are the future."
        description = "We are a system where collaborative AI meets quantum resistance security."
        />
    </Layout>
)

export default WhySmartchain;

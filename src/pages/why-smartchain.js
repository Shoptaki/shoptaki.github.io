import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"

import DifferentiateCard from "../components/differentiateCard"

const WhySmartchain = () => (
    <Layout>
        <SEO title="Why Smartchain?" />
        <WhySmartchainBanner />
        <DifferentiateCard />

    </Layout>
)

export default WhySmartchain;

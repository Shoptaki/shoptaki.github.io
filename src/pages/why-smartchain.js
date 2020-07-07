import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"

import DifferentiateCard from "../components/differentiateCard"
import FeatureCard from "../components/featureCard"

const WhySmartchain = () => (
    <Layout>
        <SEO title="Why Smartchain?" />
        <WhySmartchainBanner />
        <DifferentiateCard />
        <FeatureCard />

    </Layout>
)

export default WhySmartchain;

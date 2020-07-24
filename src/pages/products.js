import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartIDCard from "../components/smartIDCard"
import FinancialPlatformCard from "../components/FinancialPlatformCard"
import SmallCards from "../components/smallCards"
import WhySmartchainBanner from "../components/whySmartchainBanner"

const Products = () => (
    <Layout>
        <SEO title="Why Smartchain?" />
        
        <WhySmartchainBanner 
        description = "Pioneering the Data Singularity"
        regulartext = "A secure and competitive global system for data"
        />
        <SmallCards />
        <SmartIDCard />
        <FinancialPlatformCard />
    </Layout>
)

export default Products;
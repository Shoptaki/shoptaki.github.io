import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartIDCard from "../components/smartIDCard"
import FinancialPlatformCard from "../components/FinancialPlatformCard"
import SmallCards from "../components/smallCards"
import WhySmartchainBanner from "../components/whySmartchainBanner"
import UniversalBenefits from "../components/UniversalBenefits"

const Products = () => (
    <Layout>
        <SEO title="Why Smartchain?" />
        
        <WhySmartchainBanner 
        title = "Pioneering the Data Singularity"
        description = "A secure and competitive global system for data"
        />
        <UniversalBenefits/>
        <SmallCards />
        <SmartIDCard />
        <FinancialPlatformCard />
    </Layout>
)

export default Products;
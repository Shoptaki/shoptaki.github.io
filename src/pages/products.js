import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartIDCard from "../components/smartIDCard"
import FinancialPlatformCard from "../components/FinancialPlatformCard"
import SmallCards from "../components/smallCards"

const Products = () => (
    <Layout>
        <SEO title="Why Smartchain?" />
        <SmallCards />
        <SmartIDCard />
        <FinancialPlatformCard />
    </Layout>
)

export default Products;
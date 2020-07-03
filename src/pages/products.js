import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartIDCard from "../components/smartIDCard"
import FinancialPlatformCard from "../components/FinancialPlatformCard"
const Products = () => (
    <Layout>
     
        <SEO title="Why Smartchain?" />
    <SmartIDCard />
    <FinancialPlatformCard />
    </Layout>
)

export default Products;
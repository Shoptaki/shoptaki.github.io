import React, { useRef } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartIDCard from "../components/smartIDCard"
import FinancialPlatformCard from "../components/FinancialPlatformCard"
import SmallCards from "../components/smallCards"
import WhySmartchainBanner from "../components/whySmartchainBanner"

const Products = () => {
    const SIDCRef = useRef();
    const FPCRef = useRef();

    const scrollHandler = (id) => {
        if (id === "SID" && SIDCRef.current)
            scrollToRef(SIDCRef.current);

        if (id === "FPC" && FPCRef.current)
            scrollToRef(FPCRef.current);
    }

    const scrollToRef = (currentRef) => currentRef.scrollIntoView();
    
    return (
        <Layout>
            <SEO title="Why Smartchain?" />
            
            <WhySmartchainBanner 
                description = "Pioneering the Data Singularity"
                regulartext = "A secure and competitive global system for data"
            />

            <SmallCards scrollHandler={scrollHandler} />
            <SmartIDCard  ref={SIDCRef} />
            <FinancialPlatformCard ref={FPCRef} />
        </Layout>
    )
}

export default Products;
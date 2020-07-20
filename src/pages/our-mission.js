import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import MissionBanner from "../components/MissionBanner"
import RCarousel from "../components/RCarousel"

const Mission = () => (
    <Layout>
     
        <SEO title="Our Mission" />
        <MissionBanner />
        <RCarousel />
    </Layout>
)

export default Mission;
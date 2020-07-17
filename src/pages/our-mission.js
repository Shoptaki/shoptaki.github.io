import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import MissionBanner from "../components/MissionBanner"
import Carousel from "../components/SlickCarousel"

const Mission = () => (
    <Layout>
     
        <SEO title="Our Mission" />
        <MissionBanner />
        <Carousel />
    </Layout>
)

export default Mission;
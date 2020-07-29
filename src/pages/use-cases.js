import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Bubbles from "../components/bubble.jsx"
import Layout from "../components/layout"
import { theme } from "../theme/GlobalStyles"
import UsecaseCard from "../components/UsecaseCard.jsx"

const UseCases = () => {
  const query = `(max-width: ${theme.tablet})`
  const [checkMobile, setCheckMobile] = useState({
    matches: window.matchMedia(query).matches,
  })

  useEffect(() => {
    //add listener to screen change
    const handler = e => setCheckMobile({ matches: e.matches })
    window.matchMedia(query).addListener(handler)
  })
  return (
    <div>
      {checkMobile.matches ? (
        <Layout>
          <SEO title="Potential possibilities with the Smartchain" />
          {/* mobile: display card view */}
          <UsecaseCard />
        </Layout>
      ) : (
        <Layout cancelFooter="true">
          {/* no footer for animation page */}
          <SEO title="Potential possibilities with the Smartchain" />
          {/* laptop: display animation */}
          <Bubbles />
        </Layout>
      )}
    </div>
  )
}

export default UseCases

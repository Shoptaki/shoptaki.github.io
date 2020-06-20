/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const slides = [
    {
      name: "What We Offer",
      type: "Smartchain offers a hybrid infrastructure for public and private ledgers which allows for both centralized as well as decentralized models within its processes.",
    },
    {
      name: "Our Potential",
      type: "Smartchain can be integrated into existing cloud distributions and act as a bridge between densely connected  networks.",
    },
    {
      name: "How It Works",
      type: "Smartchain combines AI and DL technologies to securely facilitate digital transfers across multiple industries.",
    },
  ]

  slides.forEach(slide => {
    const node = {
      name: slide.name,
      type: slide.type,
      id: createNodeId(`Slide-${slide.name}`),
      internal: {
        type: "Slide",
        contentDigest: createContentDigest(slide),
      },
    }
    actions.createNode(node)
  })
}

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MV from "../components/MV"
import MemberMain from "../components/member-main"

const MemberTemplate = () => (
  <Layout>
    <SEO title="Home" />
    <MV />
    <MemberMain />
  </Layout>
)

export default MemberTemplate

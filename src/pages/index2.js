import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KV from "../components/kv"
import Main from "../components/main"
import Members from "../components/members"

const _IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <KV />
    <Main />
    <Members />
  </Layout>
)

export default _IndexPage

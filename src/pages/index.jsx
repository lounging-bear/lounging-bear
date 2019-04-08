import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Teaser from 'components/Teaser'
import StayTuned from '../components/StayTuned'
import SocialMedia from '../components/SocialMedia'

const IndexPage = () => (
  <Layout>
    <SEO title="Teaser" />
    <Teaser />
    <StayTuned />
    <SocialMedia />
  </Layout>
)

export default IndexPage

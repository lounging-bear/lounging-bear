import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Teaser from 'components/Teaser'
import StayTuned from '../components/StayTuned'
import SocialMedia from '../components/SocialMedia'
import Newsletter from '../components/NewsLetter'

const IndexPage = () => (
  <Layout>
    <SEO title="Teaser" />
    <Teaser />
    <StayTuned />
    <Newsletter />
    <SocialMedia />
  </Layout>
)

export default IndexPage

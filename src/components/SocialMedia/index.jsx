import React from 'react'
import { Container, Flex, Box } from 'components/Grid'
import facebookImage from './fb.png'
import pinterestImage from './pi.png'
import instagramImage from './in.png'

const Facebook = () => (
  <Box>
    <img height="48x" width="48px" src={facebookImage} alt="Lounging Bear" />
  </Box>
)
const Pinterest = () => (
  <Box>
    <img height="48x" width="48px" src={pinterestImage} alt="Lounging Bear" />
  </Box>
)
const Instagram = () => (
  <Box>
    <img height="48x" width="48px" src={instagramImage} alt="Lounging Bear" />
  </Box>
)

const SocialMedia = () => (
  <Container maxWidth="237px">
    <Flex my="5" justifyContent="space-between">
      <Facebook />
      <Pinterest />
      <Instagram />
    </Flex>
  </Container>
)

export default SocialMedia

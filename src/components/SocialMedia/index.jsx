import React from 'react'
import { Container, Flex, Box } from 'components/Grid'
import facebookImage from './fb.png'
import instagramImage from './in.png'

const Facebook = () => (
  <Box>
    <a href="https://www.facebook.com/LoungingBear/">
      <img height="48x" width="48px" src={facebookImage} alt="Lounging Bear" />
    </a>
  </Box>
)
const Instagram = () => (
  <Box>
    <a href="https://instagram.com/lounging_bear/">
      <img height="48x" width="48px" src={instagramImage} alt="Lounging Bear" />
    </a>
  </Box>
)

const SocialMedia = () => (
  <Container maxWidth="120px">
    <Flex my="5" justifyContent="space-between">
      <Facebook />
      <Instagram />
    </Flex>
  </Container>
)

export default SocialMedia

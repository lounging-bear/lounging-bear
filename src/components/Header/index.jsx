import React from 'react'
import { Container } from 'components/Grid'

import Wrapper from './Wrapper'
import Logo from './Logo'

const Header = () => (
  <Wrapper as="header">
    <Container maxWidth="700px" justifyContent="center">
      <Logo />
    </Container>
  </Wrapper>
)

export default Header

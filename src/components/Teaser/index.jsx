import React from 'react'

import { Container } from 'components/Grid'
import Headline from './Headline'
import Image from './Image'
import Paragraph from './Paragraph'

const Teaser = () => (
  <Container maxWidth="1026px">
    <Headline>Designed for serious lounging</Headline>
    <Image />
    <Container maxWidth="710px">
      <Paragraph>
        Welcome to the future site of Lounging Bear, a Chicago-based company
        that produces, distributes and sells high-quality sofas with a focus on
        comfort, design and convenience.{' '}
      </Paragraph>
      <Paragraph>
        We are currently building our website and aim to launch it on <br />
        May 1, 2019.
      </Paragraph>
    </Container>
  </Container>
)

export default Teaser

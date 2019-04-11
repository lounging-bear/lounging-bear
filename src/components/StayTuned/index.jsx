import React from 'react'
import { Box, Flex } from 'components/Grid'
import styled from 'util/style'

const Wrapper = styled(Flex)`
  background: #f9f9f9;
  height: 162px;
  padding: 0;
`

const Hl = styled(Box)`
  color: #3e4042;
  font-family: 'Azo Sans Md', 'Open Sans', Helvetica;
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 0;
`

const StayTuned = () => (
  <Wrapper alignItems="center" justifyContent="center" my="4">
    <Hl>Stay Tuned!</Hl>
  </Wrapper>
)

export default StayTuned

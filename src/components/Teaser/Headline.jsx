import React from 'react'
import PropTypes from 'prop-types'
import styled from 'util/style'
import { Box } from 'components/Grid'

const Hl = styled(Box)`
  color: #3e4042;
  font-family: 'Open Sans';
  text-transform: uppercase;
  font-size: 48px;
  line-height: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 0;
`

const Header = ({ children }) => (
  <Hl mt="5" mb="3">
    {children}
  </Hl>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header

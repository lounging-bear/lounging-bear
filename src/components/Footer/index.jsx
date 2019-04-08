import React from 'react'

import styled, { themeGet } from 'util/style'
import { OutboundLink } from 'components/Link'
import { Box, Flex } from 'components/Grid'

const StyledLink = styled(OutboundLink)`
  color: #ffffff;
`

const StyledFooter = styled(Flex)`
  background: ${themeGet('colors.primary.100')};
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 20px;
  height: 60px;
  align-items: center;
  justify-content: center;
`

const Footer = ({ ...props }) => (
  <StyledFooter as="footer" {...props}>
    <Box>
      &copy; 2019 Lounging Bear, Inc. |{' '}
      <StyledLink to="mailto:info@loungingbear.com" from="landingpage">
        contact us
      </StyledLink>
    </Box>
  </StyledFooter>
)

export default Footer

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'util/style'
import { Box } from 'components/Grid'

const ParagraphTag = styled(Box)`
  color: #3e4042;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 41px;
  text-align: center;
  padding: 0;
`

const Paragraph = ({ children }) => (
  <ParagraphTag mx="5" my="3">
    {children}
  </ParagraphTag>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph

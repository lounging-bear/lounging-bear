import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Box } from 'components/Grid'

import config from '../../../config/meta'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header siteTitle={config.siteTitle || config.siteTitleAlt} />
      {children}
      <Box mt={3}>
        <Footer />
      </Box>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

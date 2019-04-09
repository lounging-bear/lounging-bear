/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const GoogleAnalytics = require('react-ga')
const config = require('./config/meta')
require('typeface-open-sans')

/**
 * Initialize Google Analytics
 */
exports.onClientEntry = () => {
  GoogleAnalytics.initialize(config.googleAnalyticsId)
}

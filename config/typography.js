import Typography from 'typography'

const typography = new Typography({
  title: 'Test',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  /* Use the system font stack as fallback */
  bodyFontFamily: ['Open Sans'],
  scaleRatio: 2.441,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography

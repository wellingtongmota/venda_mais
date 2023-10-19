import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/montserrat'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `span`
      span: {
        fontWeight: 'medium'
      },
    },
  },
  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    text: `'Montserrat Variable', sans-serif`,
    // body: `'Open Sans', sans-serif`
  },
})

export default theme
import MainTemplate from "/src/components/templates/MainTemplate"
import {GlobalStyles} from "/src/global/theme/GlobalStyles"

function MyApp({ Component, pageProps }) {

  return( 
    <>
      <GlobalStyles />
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
  </>
  )
}

export default MyApp

import MainTemplate from "/src/components/templates/MainTemplate"


function MyApp({ Component, pageProps }) {

  return( 
  <MainTemplate  {...pageProps}>
    <Component {...pageProps} />
  </MainTemplate>)
}

export default MyApp

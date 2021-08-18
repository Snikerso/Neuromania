import * as React from "react"
import styled, {ThemeProvider} from 'styled-components'
import Header from "../organisms/Header/Header"
import {GlobalStyles} from '/src/global/theme/GlobalStyles'
import {theme} from '/src/global/theme/theme'
import Aside from "../organisms/Aside/Aside"
import MyShedule from "../organisms/MyShedule/MyShedule"
import { SheduleProvider } from "/src/global/state/useShedule"
import { useRouter } from "next/router"

const Main = styled.main`
    display:flex;
    flex-direction:column;
    max-width: 100%;
    margin-top:50px;
    padding:0 20px;
    > * {
      margin-bottom:20px;
    }

    @media (min-width:${({theme})=>theme.media.media700} ){
      padding:0 30px;
    }
    @media (min-width:${({theme})=>theme.media.media1000} ){
          max-width: 800px;
      margin-left:300px;
      padding:20px;
      align-items:left;
    }
`

const StyledWrapperMainShedule = styled.div`
  display:flex;
`


export default function MainTemplate ({children})  {
  const router = useRouter()
  const [width, setWidth] = React.useState()


  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={theme}>
            <Header width={width} setWidth={setWidth} location={router.pathname}/>
            <SheduleProvider>
            <StyledWrapperMainShedule>
                <Main>
                    {children}
                </Main>
                <MyShedule/>
              </StyledWrapperMainShedule>
          </SheduleProvider>
            <Aside/>
        </ThemeProvider>
    </>
  )
}

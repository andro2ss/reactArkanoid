import CssBaseline from '@mui/material/CssBaseline'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import React, { ReactNode } from 'react'
import { Footer } from '../../components/Footer/Footer'
import styled from 'styled-components'

export interface IMainLayout {
  window?: () => Window
  headerContent?: ReactNode
  sidebarContent?: ReactNode
  footerContent?: ReactNode
}
export const MainLayout = (props: IMainLayout) => {
  return (
    <>
      <CssBaseline />
      <Header content={props.headerContent} />
      <ContentBox>
        <Outlet />
      </ContentBox>
      <Footer content={props.footerContent} />
    </>
  )
}

const ContentBox = styled.div`
  flex: 1;
`

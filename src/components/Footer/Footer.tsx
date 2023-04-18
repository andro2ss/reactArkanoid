import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IFooter {
  content?: ReactNode
}

export const Footer = ({ content }: IFooter) => {
  return <FooterBox>{content}</FooterBox>
}

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`

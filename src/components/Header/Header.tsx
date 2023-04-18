import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IHeader {
  content?: ReactNode
}

export const Header = ({ content }: IHeader) => {
  return <StyledHeader>{content}</StyledHeader>
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`

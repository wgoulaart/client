import styled, { css } from 'styled-components'
import { LogoProps } from './index'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`

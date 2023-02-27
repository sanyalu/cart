import styled from 'styled-components'
import { ButtonType } from '../Button/Button'

export const StyledPlusMinusCounter = styled.div<ButtonType>`
  display: inline-flex;
  align-items: center;
  border: 2px solid ${({ theme, variant }) => theme.colors[variant]};
  border-radius: 25px;
  font-size: 1em;

  & > span {
    display: flex;
    justify-content: center;
    min-width: 1.6em;
    user-select: none;
    font-size: ${({ size }) => (size === 'medium' ? '18px' : '12px')};
    color: ${({ theme, variant }) => theme.colors[variant]};
  }
`
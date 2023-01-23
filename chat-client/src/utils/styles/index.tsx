import styled from 'styled-components'
import { InputContainerProps, PageProps } from './styleTypes'

export const InputContainer = styled.div<InputContainerProps>`
    background-color: ${(prop) => prop.backgroundColor || '#131313'};
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
`

export const InputContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`

export const InputError = styled.span`
  color: #ff0000;
  text-transform: uppercase;
  font-size: 11px;
`

export const InputField = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  &:disabled {
    color: #3b3b3b;
  }
`;

export const Page = styled.div<PageProps>`
  background-color: #1a1a1a;
  height: 100%;
  width: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 250ms background-color ease;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    background-color: #3a1cff;
  }
  &:disabled {
    background-color: #4937bc7c;
    color: #878787a2;
    cursor: not-allowed;
  }
`;
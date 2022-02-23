import { Link } from '@material-ui/core';
import styled from 'styled-components';

export const LoginIconWrapper = styled.div<{ active: boolean }>`
  margin-right: 10px;
  /* background: ${({ active }) => (active ? '#eee' : '#fff')};s */
  /* padding: 10px; */
  border-radius: 2px;
`;

export const StyledLoginButton = styled(Link)`
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.24);
  padding: 10px;
  border-radius: 2px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto, sans-serif;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    background-color: #eee;
    color: rgba(0, 0, 0, 0.54);
    opacity: 1;
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  background-color: #fff;
  height: 50px;
`;

export const LoginContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 60vw;
  min-width: 600px;
  justify-self: center;
  border-radius: 25px;
`;

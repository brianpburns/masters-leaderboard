import { Link } from 'react-router-dom';
import { thirteenthTeeBox } from 'src/client/data';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  padding: 3px 0;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    text-decoration: none;
    color: #006747;
    background-color: white;
    border: none;

    &:hover {
      color: #059265;
      cursor: pointer;
    }
  }
`;

export const StyledListItem = styled.li<{ active: boolean }>`
  margin: auto;
  ${({ active }) => active && 'border-bottom: solid 2px #006747;'};
`;

export const MastersLogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 10px;

  img {
    margin: auto;
    margin-bottom: 20px;
    width: 50%;
    max-width: fit-content;
    max-height: 80px;
  }
`;

export const HeaderContainer = styled.div`
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)), url(${thirteenthTeeBox});
  background-size: cover;
  background-position: center;
  height: 15vh;
`;

export const StyledLoginLogoutContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
`;

export const StyledLoginLink = styled(Link)`
  margin: 0;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: black;
    cursor: pointer;
  }
  &:visited {
    color: white;
  }
`;

export const StyledLogoutButton = styled.button`
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  font-size: 1rem;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

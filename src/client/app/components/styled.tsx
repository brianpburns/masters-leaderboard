import { thirteenthTeeBox } from 'src/client/data';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: white;
  height: max-content;
`;

export const MastersLogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  border-radius: 25px 25px 0px 0px;
  height: 100%;
  padding-bottom: 10px;

  img {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    max-width: fit-content;
    max-height: 80px;
  }
`;

export const HeaderContainer = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0)
    ),
    url(${thirteenthTeeBox});
  background-size: cover;
  background-position: center;
  height: 15vh;
`;

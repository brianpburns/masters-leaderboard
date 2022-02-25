import React from 'react';
import { mastersLogoSrc } from 'src/client/data';
import { HeaderContainer, MastersLogoWrapper } from './styled';

export const HeaderImage = () => (
  <HeaderContainer>
    <MastersLogoWrapper>
      <img src={mastersLogoSrc} alt='masters logo' />
    </MastersLogoWrapper>
  </HeaderContainer>
);

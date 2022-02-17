import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
  size?: string;
}

const StyledWrapper = styled.div<{ size?: string; color?: string }>`
  width: ${({ size }) => size && `${size}px`};
  height: ${({ size }) => size && `${size}px`};
  color: ${({ color }) => (color ? `${color}` : 'silver')};

  .icon {
    display: inline-block;
    line-height: 0;
  }
`;

export const Icon = ({ color, size, children }: Props) => {
  return (
    <StyledWrapper color={color} size={size}>
      {children}
    </StyledWrapper>
  );
};

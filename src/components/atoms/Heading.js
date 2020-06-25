import styled from 'styled-components';

export const StyledSpan = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.weight.regular};
  margin: 0;
`;

import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme }) => theme.weight.light};
  margin: 0;
`;

export default Paragraph;

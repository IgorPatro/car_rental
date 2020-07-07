import styled from 'styled-components';
import { response } from 'theme/mainTheme';

const Image = styled.div`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: 50% 50%;
  background-size: cover;

  @media ${response.huge} {
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
`;

export default Image;

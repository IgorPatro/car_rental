import React from 'react';
import styled from 'styled-components';
import { response } from 'theme/mainTheme';

// Components & assets
import { Heading, StyledSpan } from 'components/atoms/Heading';
import ServicesBackground from 'assets/images/services-background.png';

const StyledWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${ServicesBackground});
  background-size: cover;
  background-position: 50% 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: 2.7rem;

  @media ${response.phone} {
    max-width: 90%;
  }

  @media ${response.tablet} {
    font-size: 3.5rem;
  }

  @media ${response.bigTablet} {
    font-size: 3.8rem;
  }

  @media ${response.bigDesktop} {
    font-size: 3.9rem;
  }

  @media ${response.huge} {
    font-size: 4.1rem;
  }
`;

const ServicesIntro = () => (
  <StyledWrapper>
    <StyledHeading>
      <StyledSpan color="white">Zobacz co możemy dla </StyledSpan>
      <StyledSpan color="primary">Ciebie </StyledSpan>
      <StyledSpan color="white">zrobić</StyledSpan>
    </StyledHeading>
  </StyledWrapper>
);

export default ServicesIntro;

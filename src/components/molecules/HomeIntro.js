import React from 'react';
import styled from 'styled-components';
import { response } from 'theme/mainTheme';

// Components & assets
import { Heading, StyledSpan } from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  width: 90%;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledHeading = styled(Heading)`
  @media ${response.phone} {
    font-size: 3.6rem;
  }

  @media ${response.tablet} {
    font-size: 4.5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px 0 20px;

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 2.2rem;
    margin: 15px 0 30px;
  }
`;

const HomeIntro = () => (
  <StyledWrapper>
    <StyledHeading>
      <StyledSpan color="white">Sprawiamy Ci </StyledSpan>
      <StyledSpan color="primary">radość </StyledSpan>
      <StyledSpan color="white">naszymi </StyledSpan>
      <StyledSpan color="primary">maszynami.</StyledSpan>
    </StyledHeading>
    <StyledParagraph color="white">
      Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est.
    </StyledParagraph>
    <Button link href="#">
      Rezerwacja online
    </Button>
  </StyledWrapper>
);

export default HomeIntro;

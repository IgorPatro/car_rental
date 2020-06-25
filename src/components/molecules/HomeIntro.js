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

  @media ${response.tablet} {
    width: 80%;
    left: 5vh;
    bottom: 15%;
    transform: translateX(0);
  }

  @media ${response.desktop} {
    width: 50%;
    left: 8vh;
    bottom: 15%;
  }

  @media ${response.bigDesktop} {
    width: 45%;
    bottom: 20%;
    left: 10vh;
  }

  @media ${response.huge} {
    width: 40%;
    bottom: 25%;
    left: 12vh;
  }
`;

const StyledHeading = styled(Heading)`
  @media ${response.phone} {
    font-size: 3.6rem;
  }

  @media ${response.tablet} {
    font-size: 4rem;
  }

  @media ${response.bigTablet} {
    font-size: 4.5rem;
  }

  @media ${response.desktop} {
    font-size: 4.5rem;
  }

  @media ${response.bigDesktop} {
    font-size: 4.7rem;
  }

  @media ${response.huge} {
    font-size: 5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px 0 20px;

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 1.9rem;
    margin: 15px 0 30px;
  }

  @media ${response.bigTablet} {
    font-size: 2.1rem;
    margin: 25px 0 35px;
  }

  @media ${response.desktop} {
    font-size: 1.9rem;
  }

  @media ${response.bigDesktop} {
    font-size: 2rem;
  }

  @media ${response.huge} {
    font-size: 2.1rem;
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

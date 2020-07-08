import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { response } from 'theme/mainTheme';

// Assets & components
import { Heading } from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledHeading = styled(Heading)`
  color: white;
  font-size: 2rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
`;

const StyledParagraph = styled(Paragraph)`
  color: white;
  margin: 0 0 0 5px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.weight.veryLight};
`;

const StyledContactInfoWrapper = styled.div`
  display: flex;
`;

const ContactInfo = () => (
  <StyledWrapper>
    <StyledHeading>Kontakt</StyledHeading>
    <StyledContactInfoWrapper>
      <StyledIcon icon={['fas', 'map-marker-alt']} />
      <StyledParagraph>ul. Towarowa 32 12-321 Tarnów</StyledParagraph>
    </StyledContactInfoWrapper>
    <StyledContactInfoWrapper>
      <StyledIcon icon={['fas', 'envelope']} />
      <StyledParagraph>kontakt@endlessride.pl</StyledParagraph>
    </StyledContactInfoWrapper>
    <StyledContactInfoWrapper>
      <StyledIcon icon={['fas', 'phone-alt']} />
      <StyledParagraph>(+48) 732 832 931</StyledParagraph>
    </StyledContactInfoWrapper>
  </StyledWrapper>
);

export default ContactInfo;

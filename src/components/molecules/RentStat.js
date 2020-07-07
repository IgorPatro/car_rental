import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets & components
import { Heading } from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { response } from 'theme/mainTheme';

// Rent stat
const StyledRentStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledRentHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};

  @media ${response.phone} {
    font-size: 3.4rem;
  }

  @media ${response.tablet} {
    font-size: 4rem;
  }

  @media ${response.desktop} {
    font-size: 3.5rem;
  }

  @media ${response.bigDesktop} {
    font-size: 4rem;
  }
`;
const StyledRentParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.grey};

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 2rem;
  }

  @media ${response.desktop} {
    font-size: 1.7rem;
  }

  @media ${response.bigDesktop} {
    font-size: 2rem;
  }
`;

const RentStat = ({ number, content }) => (
  <StyledRentStatWrapper>
    <StyledRentHeading>{number}</StyledRentHeading>
    <StyledRentParagraph>{content}</StyledRentParagraph>
  </StyledRentStatWrapper>
);

RentStat.propTypes = {
  number: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default RentStat;

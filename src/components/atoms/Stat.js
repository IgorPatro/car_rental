import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { response } from 'theme/mainTheme';

// Assets & components
import Paragraph from 'components/atoms/Paragraph';

const StyledStatWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 27px;

  @media ${response.phone} {
    width: 30px;
  }

  @media ${response.tablet} {
    width: 35px;
  }

  @media ${response.desktop} {
    width: 30px;
  }

  @media ${response.bigDesktop} {
    width: 32px;
  }

  @media ${response.huge} {
    width: 34px;
  }
`;

const StyledStatContent = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.grey};
  margin-left: 5px;
  font-size: 1.5rem;

  @media ${response.phone} {
    font-size: 1.6rem;
  }

  @media ${response.tablet} {
    font-size: 1.9rem;
  }

  @media ${response.desktop} {
    font-size: 1.6rem;
    margin-left: 8px;
  }

  @media ${response.bigDesktop} {
    font-size: 1.7rem;
  }

  @media ${response.huge} {
    font-size: 1.8rem;
  }
`;

const Stat = ({ icon, statScore }) => (
  <StyledStatWrapper>
    <StyledIcon src={icon} alt="0-100 icon" />
    <StyledStatContent>{statScore}</StyledStatContent>
  </StyledStatWrapper>
);

Stat.propTypes = {
  icon: PropTypes.string.isRequired,
  statScore: PropTypes.string.isRequired,
};

export default Stat;

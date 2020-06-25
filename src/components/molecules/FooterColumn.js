import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { response } from 'theme/mainTheme';

// Components & assets
import { Heading } from 'components/atoms/Heading';

const StyledWrapper = styled.div`
  margin-bottom: 20px;

  @media ${response.phone} {
    margin-bottom: 25px;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;

  @media ${response.phone} {
    font-size: 2.3rem;
  }

  @media ${response.tablet} {
    font-size: 2.6rem;
  }
`;

const StyledFooterColumnContent = styled.div`
  margin-top: 5px;
  font-size: 1.3rem;
`;

const FooterColumn = ({ headingContent, children }) => (
  <StyledWrapper>
    <StyledHeading>{headingContent}</StyledHeading>
    <StyledFooterColumnContent>{children}</StyledFooterColumnContent>
  </StyledWrapper>
);

FooterColumn.propTypes = {
  headingContent: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FooterColumn;

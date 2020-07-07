import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets & components
import { Heading } from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import RentStat from 'components/molecules/RentStat';
import { response } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgrey};
  padding: 20px 20px 30px 20px;
  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.25);

  @media ${response.tablet} {
    padding: 50px 100px 70px;
  }

  @media ${response.bigTablet} {
    padding: 60px 130px 80px;
  }

  @media ${response.desktop} {
    width: 50%;
    padding: 40px 60px;
  }

  @media ${response.bigDesktop} {
    padding: 50px 80px;
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  font-size: 2.3rem;

  @media ${response.phone} {
    font-size: 2.4rem;
  }

  @media ${response.tablet} {
    font-size: 3.2rem;
  }

  @media ${response.desktop} {
    font-size: 2.7rem;
  }

  @media ${response.bigDesktop} {
    font-size: 3rem;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100px;
    height: 6px;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.5rem;
  margin: 35px 0 25px;

  @media ${response.phone} {
    font-size: 1.6rem;
  }

  @media ${response.tablet} {
    font-size: 1.9rem;
    margin: 45px 0 30px;
  }

  @media ${response.desktop} {
    font-size: 1.6rem;
  }

  @media ${response.bigDesktop} {
    font-size: 1.9rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 1.4rem;
`;

const StyledRentStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 30px;
`;

const RentInfo = ({
  title,
  children,
  reservation,
  numberOne,
  numberTwo,
  contentOne,
  contentTwo,
}) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    <StyledParagraph>{children}</StyledParagraph>
    {reservation ? (
      <StyledButton link href="#">
        Rezerwacja online
      </StyledButton>
    ) : null}
    <StyledRentStats>
      <RentStat number={numberOne} content={contentOne} />
      <RentStat number={numberTwo} content={contentTwo} />
    </StyledRentStats>
  </StyledWrapper>
);

RentInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  reservation: PropTypes.bool,
  numberOne: PropTypes.number.isRequired,
  numberTwo: PropTypes.number.isRequired,
  contentOne: PropTypes.string.isRequired,
  contentTwo: PropTypes.string.isRequired,
};

RentInfo.defaultProps = {
  reservation: false,
};

export default RentInfo;

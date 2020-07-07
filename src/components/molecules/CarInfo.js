import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components & assets
import { Heading } from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Stat from 'components/atoms/Stat';
import { response } from 'theme/mainTheme';
// icons
import zero100Icon from 'assets/icons/0-100.svg';
import colorIcon from 'assets/icons/color.svg';
import engineIcon from 'assets/icons/engine.svg';
import fuelIcon from 'assets/icons/fuel.svg';
import powerIcon from 'assets/icons/power.svg';
import speedIcon from 'assets/icons/speed.svg';
import transsmisionIcon from 'assets/icons/transsmision.svg';
import yearbookIcon from 'assets/icons/yearbook.svg';

const StyledWrapper = styled.div`
  padding: 10px;

  @media ${response.phone} {
    padding: 15px;
  }

  @media ${response.tablet} {
    padding: 30px;
  }

  @media ${response.bigTablet} {
    padding: 0;
    width: 50%;
    order: ${({ inverted }) => (inverted === true ? 2 : 'initial')};
  }

  @media ${response.desktop} {
    width: 48%;
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weight.semiBold};

  @media ${response.phone} {
    font-size: 3.4rem;
  }

  @media ${response.tablet} {
    font-size: 4rem;
  }

  @media ${response.desktop} {
    font-size: 3.4rem;
  }

  @media ${response.bigDesktop} {
    font-size: 3.6rem;
  }

  @media ${response.huge} {
    font-size: 3.8rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.grey};
  margin: 5px 0 15px;
  font-size: 1.5rem;
  font-weight: 300;

  @media ${response.phone} {
    font-size: 1.6rem;
  }

  @media ${response.tablet} {
    font-size: 1.9rem;
    width: 80%;
    margin: 10px 0 20px;
  }

  @media ${response.bigTablet} {
    width: 100%;
  }

  @media ${response.desktop} {
    font-size: 1.6rem;
    width: 90%;
  }

  @media ${response.bigDesktop} {
    font-size: 1.7rem;
  }

  @media ${response.huge} {
    font-size: 1.8rem;
  }
`;

// Stats & icons
const StyledStatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3px 0;

  @media ${response.phone} {
    grid-gap: 5px 0;
    width: 90%;
  }

  @media ${response.tablet} {
    width: 80%;
  }
`;

const CarInfo = ({
  carName,
  children,
  yearbook,
  zero100,
  engine,
  power,
  speed,
  color,
  fuel,
  transsmision,
  inverted,
}) => (
  <StyledWrapper inverted={inverted}>
    <StyledHeading>{carName}</StyledHeading>
    <StyledParagraph>{children}</StyledParagraph>
    <StyledStatsWrapper>
      <Stat icon={yearbookIcon} statScore={yearbook} />
      <Stat icon={zero100Icon} statScore={zero100} />
      <Stat icon={engineIcon} statScore={engine} />
      <Stat icon={powerIcon} statScore={power} />
      <Stat icon={speedIcon} statScore={speed} />
      <Stat icon={colorIcon} statScore={color} />
      <Stat icon={fuelIcon} statScore={fuel} />
      <Stat icon={transsmisionIcon} statScore={transsmision} />
    </StyledStatsWrapper>
  </StyledWrapper>
);

CarInfo.propTypes = {
  carName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  yearbook: PropTypes.string.isRequired,
  zero100: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  power: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  transsmision: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

CarInfo.defaultProps = {
  inverted: false,
};

export default CarInfo;

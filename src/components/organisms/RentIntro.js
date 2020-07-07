import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets & components
import { Heading, StyledSpan } from 'components/atoms/Heading';
import RentInfo from 'components/molecules/RentInfo';
import Image from 'components/atoms/Image';
import { response } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  @media ${response.phone} {
    margin-top: 30px;
  }

  @media ${response.desktop} {
    margin-top: 70px;
  }

  @media ${response.bigDesktop} {
    margin-top: 100px;
  }

  @media ${response.huge} {
    width: 80%;
    margin: 110px auto 0;
  }
`;

// Upper
const StyledUpperInnerWrapper = styled.div`
  padding: 30px 10px;

  @media ${response.tablet} {
    padding: 40px 10px;
  }
`;

const StyledIntroHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  text-align: center;
  z-index: ${({ theme }) => theme.zIndex.lvl2};

  @media ${response.phone} {
    font-size: 2.7rem;
  }

  @media ${response.tablet} {
    font-size: 3.5rem;
  }

  @media ${response.bigDesktop} {
    font-size: 3.8rem;
  }
`;

const StyledIntroSpan = styled(StyledSpan)`
  position: relative;

  &::before {
    content: '${({ before }) => before}';
    font-weight: ${({ theme }) => theme.weight.bold};
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.lightgrey};
    font-size: 2.5em;
    z-index: -1;

    @media ${response.phone} {
      left: -25px;
    }

    @media ${response.desktop} {
      left: -45px;
  }
}`;

// Bottom
const StyledBottomInnerWrapper = styled.div`
  @media ${response.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${response.desktop} {
    flex-direction: row;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 50vh;

  @media ${response.tablet} {
    order: 2;
  }

  @media ${response.desktop} {
    order: ${({ inverted }) => (inverted ? 2 : 'initial')};
    width: 50%;
    transform: translateY(20px);
  }
`;

const RentIntro = ({
  introductionBefore,
  introductionTitle,
  imageSource,
  title,
  reservation,
  numberOne,
  numberTwo,
  contentOne,
  contentTwo,
  children,
  inverted,
}) => (
  <StyledWrapper>
    <StyledUpperInnerWrapper>
      <StyledIntroHeading>
        <StyledIntroSpan color="primary" before={introductionBefore}>
          {introductionTitle}
        </StyledIntroSpan>
      </StyledIntroHeading>
    </StyledUpperInnerWrapper>
    <StyledBottomInnerWrapper>
      <StyledImage imgSrc={imageSource} inverted={inverted} />
      <RentInfo
        title={title}
        reservation={reservation}
        numberOne={numberOne}
        numberTwo={numberTwo}
        contentOne={contentOne}
        contentTwo={contentTwo}
      >
        {children}
      </RentInfo>
    </StyledBottomInnerWrapper>
  </StyledWrapper>
);

RentIntro.propTypes = {
  introductionBefore: PropTypes.string.isRequired,
  introductionTitle: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reservation: PropTypes.bool,
  numberOne: PropTypes.number.isRequired,
  numberTwo: PropTypes.number.isRequired,
  contentOne: PropTypes.string.isRequired,
  contentTwo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

RentIntro.defaultProps = {
  reservation: false,
  inverted: false,
};

export default RentIntro;

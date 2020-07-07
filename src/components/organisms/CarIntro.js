import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { response } from 'theme/mainTheme';

// Assets & components
import CarInfo from 'components/molecules/CarInfo';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media ${response.bigTablet} {
    padding: 0 5%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media ${response.desktop} {
    margin-bottom: 130px;
    padding: 0 8%;
  }

  @media ${response.bigDesktop} {
    padding: 0 10%;
  }

  @media ${response.huge} {
    padding: 0 15%;
    margin-bottom: 150px;
  }
`;

const StyledImage = styled.img`
  width: 90%;
  margin: 20px 0 0;

  @media ${response.tablet} {
    width: 80%;
  }

  @media ${response.bigTablet} {
    width: 45%;
  }
`;

const CarIntro = ({
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
  image,
  inverted,
  openImages,
  indexOfFirstImage,
}) => (
  <StyledWrapper>
    <CarInfo
      carName={carName}
      yearbook={yearbook}
      zero100={zero100}
      engine={engine}
      power={power}
      speed={speed}
      color={color}
      fuel={fuel}
      transsmision={transsmision}
      inverted={inverted}
    >
      {children}
    </CarInfo>
    <StyledImage src={image} onClick={openImages} data-index={indexOfFirstImage} />
  </StyledWrapper>
);

CarIntro.propTypes = {
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
  image: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  openImages: PropTypes.func.isRequired,
  indexOfFirstImage: PropTypes.string.isRequired,
};

CarIntro.defaultProps = {
  inverted: false,
};

export default CarIntro;

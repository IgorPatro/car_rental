/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { response } from 'theme/mainTheme';

// Assets & components
import mustang from 'assets/images/mustang.png';
import mustang2 from 'assets/images/mustang2.png';
import mustang3 from 'assets/images/mustang3.png';
import mercedes from 'assets/images/mercedes.png';
import mercedes2 from 'assets/images/mercedes2.png';
import mercedes3 from 'assets/images/mercedes3.png';
import audi from 'assets/images/audi.png';
import audi2 from 'assets/images/audi2.png';
import audi3 from 'assets/images/audi3.png';

const initialImages = [
  mustang,
  mustang2,
  mustang3,
  mercedes,
  mercedes2,
  mercedes3,
  audi,
  audi2,
  audi3,
];

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blackAlpha};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: white;
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 3rem;
  cursor: pointer;

  @media ${response.phone} {
    font-size: 4rem;
  }
`;

const StyledImageOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 85%;
  max-height: 80vh;
`;

const RemoteIconsOuter = styled.div`
  display: flex;
  margin-top: 10px;
`;

const RemoteIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 3rem;
  margin: 0 5px;

  @media ${response.phone} {
    font-size: 3.5rem;
  }
`;

class Gallery extends Component {
  state = {
    images: [...initialImages],
    activeImage: mustang,
  };

  componentWillMount() {
    const { activeGalleryImageIndex } = this.props;

    this.setState((prevState) => ({
      activeImage: prevState.images[activeGalleryImageIndex],
    }));
  }

  nextImage = () => {
    const indexOfActive = this.state.images.indexOf(this.state.activeImage);
    const lenghtOfImages = this.state.images.length;

    if (indexOfActive + 1 === lenghtOfImages) {
      // zdjęcie nr 1
      this.setState((prevState) => ({
        activeImage: prevState.images[0],
      }));
    } else {
      // next zdj
      this.setState((prevState) => ({
        activeImage: prevState.images[indexOfActive + 1],
      }));
    }
  };

  prevImage = () => {
    const indexOfActive = this.state.images.indexOf(this.state.activeImage);
    const lenghtOfImages = this.state.images.length;

    if (indexOfActive - 1 === -1) {
      // zdjęcie nr 1
      this.setState((prevState) => ({
        activeImage: prevState.images[lenghtOfImages - 1],
      }));
    } else {
      // next zdj
      this.setState((prevState) => ({
        activeImage: prevState.images[indexOfActive - 1],
      }));
    }
  };

  render() {
    const { closeGalleryFunc } = this.props;

    return (
      <StyledWrapper>
        <CloseIcon icon={['fas', 'times']} onClick={closeGalleryFunc} />
        <StyledImageOuter>
          <StyledImage src={this.state.activeImage} />
          <RemoteIconsOuter>
            <RemoteIcon icon={['fas', 'arrow-alt-circle-left']} onClick={this.prevImage} />
            <RemoteIcon icon={['fas', 'arrow-alt-circle-right']} onClick={this.nextImage} />
          </RemoteIconsOuter>
        </StyledImageOuter>
      </StyledWrapper>
    );
  }
}

Gallery.propTypes = {
  closeGalleryFunc: PropTypes.func.isRequired,
  activeGalleryImageIndex: PropTypes.string.isRequired,
};

export default Gallery;

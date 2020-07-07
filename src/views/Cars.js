import React, { Component } from 'react';

// Components & assets
import Footer from 'components/organisms/Footer';
import CarIntro from 'components/organisms/CarIntro';
import Gallery from 'components/organisms/Gallery';
// Cars
import mustang from 'assets/images/mustang.png';
import audi from 'assets/images/audi.png';
import mercedes from 'assets/images/mercedes.png';

class Cars extends Component {
  state = {
    isGalleryOpen: false,
    indexOfImage: null,
  };

  closeGallery = () => {
    this.setState({
      isGalleryOpen: false,
    });
  };

  openGallery = (e) => {
    this.setState({
      isGalleryOpen: true,
      indexOfImage: e.target.dataset.index,
    });
  };

  render() {
    const { isGalleryOpen } = this.state;

    return (
      <>
        <CarIntro
          carName="Ford mustang GT"
          yearbook="2017"
          zero100="2.3"
          engine="V8"
          power="240 KM"
          speed="350 km/h"
          color="czarny"
          fuel="benzyna"
          transsmision="automatyczna"
          image={mustang}
          openImages={this.openGallery}
          // TODO: change indexOfFirstImage content to set the right image on click
          indexOfFirstImage="0"
        >
          Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est.
        </CarIntro>
        <CarIntro
          carName="Mercedes A45s"
          yearbook="2019"
          zero100="3.1"
          engine="3.2L"
          power="240 KM"
          speed="280 km/h"
          color="szary"
          fuel="benzyna"
          transsmision="automatyczna"
          image={mercedes}
          inverted
          openImages={this.openGallery}
          // TODO: change indexOfFirstImage content to set the right image on click
          indexOfFirstImage="3"
        >
          Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est.
        </CarIntro>
        <CarIntro
          carName="Audi RS3"
          yearbook="2020"
          zero100="3.5"
          engine="4.4L"
          power="270 KM"
          speed="320 km/h"
          color="biały"
          fuel="benzyna"
          transsmision="automatyczna"
          image={audi}
          openImages={this.openGallery}
          // TODO: change indexOfFirstImage content to set the right image on click
          indexOfFirstImage="6"
        >
          Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est.
        </CarIntro>
        {isGalleryOpen && (
          <Gallery
            closeGalleryFunc={this.closeGallery}
            activeGalleryImageIndex={this.state.indexOfImage}
          />
        )}
        <Footer />
      </>
    );
  }
}

export default Cars;

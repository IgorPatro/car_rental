import React from 'react';

import ServicesIntro from 'components/molecules/ServicesIntro';
import RentIntro from 'components/organisms/RentIntro';
import Footer from 'components/organisms/Footer';

import carOne from 'assets/images/car-one.png';

const Services = () => (
  <>
    <ServicesIntro />
    <RentIntro
      introductionBefore="01"
      introductionTitle="Wynajem krótkoterminowy"
      imageSource={carOne}
      title="Idealna opcja na weekend"
      reservation
      numberOne="32"
      numberTwo="3"
      contentOne="udane wynajmy"
      contentTwo="samochody do wynajmu"
    >
      Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel
      est.
    </RentIntro>
    <RentIntro
      inverted
      introductionBefore="02"
      introductionTitle="Samochód na ślub"
      imageSource={carOne}
      title="Patent na udany ślub"
      numberOne="6"
      numberTwo="3"
      contentOne="udane wynajmy"
      contentTwo="samochody do wynajmu"
    >
      Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel
      est.
    </RentIntro>
    <RentIntro
      introductionBefore="03"
      introductionTitle="Wynajem długoterminowy"
      imageSource={carOne}
      title="Na dłuższą trasę"
      numberOne="14"
      numberTwo="3"
      contentOne="udane wynajmy"
      contentTwo="samochody do wynajmu"
    >
      Zarezerwuj swój samochód marzeń już teraz! Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel est. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nam lacus metus, tempor ut lobortis eu, sollicitudin vel
      est.
    </RentIntro>
    <Footer />
  </>
);

export default Services;

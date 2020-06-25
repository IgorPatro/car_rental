import React from 'react';
import styled from 'styled-components';

// Components & assets
import HomeIntro from 'components/molecules/HomeIntro';
import homeBackground from 'assets/images/home-background.png';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${homeBackground});
  background-size: cover;
  background-position: 15%;
  position: relative;
`;

const Home = () => (
  <StyledWrapper>
    <HomeIntro />
  </StyledWrapper>
);

export default Home;

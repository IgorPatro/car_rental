/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { response } from 'theme/mainTheme';

// Components & assets
import FooterColumn from 'components/molecules/FooterColumn';

// Main items
const StyledWrapper = styled.footer`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  // TODO: SET THE GLOBAL MARGIN TOP UPPER FOOTER
  /* margin-top: 100px; */

  @media ${response.desktop} {
    padding: 20px;
  }
`;

const StyledInnerWrapper = styled.div`
  @media ${response.tablet} {
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${response.bigTablet} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }

  @media ${response.desktop} {
    padding: 25px 50px;
  }

  @media ${response.bigDesktop} {
    padding: 30px 130px 40px;
  }

  @media ${response.huge} {
    padding: 30px 200px 50px;
  }
`;

const StyledFooterParagraph = styled.p`
  margin: 0 0 6px 0;

  @media ${response.phone} {
    font-size: 1.4rem;
  }

  @media ${response.tablet} {
    font-size: 1.6rem;
    margin: 0 0 8px 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  margin: 0 0 6px 0;
  max-width: 150px;

  @media ${response.phone} {
    font-size: 1.4rem;
  }

  @media ${response.tablet} {
    font-size: 1.6rem;
  }
`;

// Copyrigting and production
const StyledCopyrightHeading = styled.h5`
  width: 100%;
  margin: 0;
  font-size: 1.3rem;
  display: inline-flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.weight.light};

  @media ${response.phone} {
    font-size: 1.4rem;
  }

  @media ${response.tablet} {
    font-size: 1.7rem;
  }
`;
const StyledCopyrightSpan = styled.div`
  max-width: 40%;
  text-align: ${({ side }) => (side === 'right' ? 'right' : 'left')};
`;
const StyledCopyrightLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: ${({ theme }) => theme.weight.regular};
`;

// SOCIAL MEDIA FOOTER PART COMPONENTS
const StyledIconPartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 1.7rem;

  @media ${response.phone} {
    font-size: 1.9rem;
  }

  @media ${response.tablet} {
    font-size: 2.4rem;
  }
`;
const StyledIconLink = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 3px;

  @media ${response.phone} {
    font-size: 1.4rem;
    margin-left: 5px;
  }

  @media ${response.tablet} {
    font-size: 1.6rem;
    margin-left: 8px;
  }
`;
const StyledSocialMediaItem = ({ icon, children }) => (
  <StyledIconPartWrapper>
    <StyledIcon icon={['fab', icon]} />
    <StyledIconLink target="_blank" href={`https://${children}`}>
      {children}
    </StyledIconLink>
  </StyledIconPartWrapper>
);

StyledSocialMediaItem.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const Footer = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <FooterColumn headingContent="Kontakt">
        <StyledFooterParagraph>
          Endless Ride ul. Towarowa 32
          <br />
          12-321 Tarnów
        </StyledFooterParagraph>
        <StyledFooterParagraph>
          Godziny otwarcia: <br /> Pn-Nd 9:00-21:00
        </StyledFooterParagraph>
        <StyledFooterParagraph>Telefon: +48 321 415 783</StyledFooterParagraph>
        <StyledFooterParagraph>Email: kontakt@endlessride.pl</StyledFooterParagraph>
      </FooterColumn>
      <FooterColumn headingContent="Dokumenty">
        <StyledLink to="#">Umowa najmu</StyledLink>
      </FooterColumn>
      <FooterColumn headingContent="Zakładki">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cars">Samochody</StyledLink>
        <StyledLink to="/services">Usługi</StyledLink>
        <StyledLink to="#">Rezerwacja online</StyledLink>
      </FooterColumn>
      <FooterColumn headingContent="Social Media">
        <StyledSocialMediaItem icon="facebook-square">
          facebook.com/endlessride
        </StyledSocialMediaItem>
        <StyledSocialMediaItem icon="instagram">instagram.com/endlessride</StyledSocialMediaItem>
      </FooterColumn>
    </StyledInnerWrapper>
    <StyledCopyrightHeading>
      <StyledCopyrightSpan>
        Created by{' '}
        <StyledCopyrightLink target="_blank" href="https://webingentertainment.pl">
          Webing Entertainment
        </StyledCopyrightLink>
      </StyledCopyrightSpan>
      <StyledCopyrightSpan side="right">
        Copyright {new Date().getFullYear()} © Endless Ride
      </StyledCopyrightSpan>
    </StyledCopyrightHeading>
  </StyledWrapper>
);

export default Footer;

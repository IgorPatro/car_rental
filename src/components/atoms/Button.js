import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { response } from 'theme/mainTheme';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 40px;
  transition: 0.3s;

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 2.1rem;
    padding: 10px 60px;
  }

  @media ${response.bigTablet} {
    font-size: 2.5rem;
  }

  @media ${response.desktop} {
    font-size: 1.9rem;
  }

  @media ${response.huge} {
    font-size: 2rem;
  }

  &:hover {
    background-color: black;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 30px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 40px;
  text-decoration: none;
  transition: 0.3s;
  font-size: 1.5rem;

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 1.9rem;
    padding: 10px 60px;
  }

  @media ${response.bigTablet} {
    font-size: 2.1rem;
  }

  @media ${response.desktop} {
    font-size: 1.9rem;
  }

  @media ${response.huge} {
    font-size: 2rem;
  }

  &:hover {
    background-color: black;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = ({ link, href, children }) => (
  <>
    {link ? (
      <StyledLink href={href}>{children}</StyledLink>
    ) : (
      <StyledButton type="button">{children}</StyledButton>
    )}
  </>
);

Button.propTypes = {
  link: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  link: null,
  href: null,
};

export default Button;

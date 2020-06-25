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

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 2.1rem;
    padding: 10px 60px;
  }
`;

const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 40px;
  text-decoration: none;

  @media ${response.phone} {
    font-size: 1.7rem;
  }

  @media ${response.tablet} {
    font-size: 2.1rem;
    padding: 10px 60px;
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

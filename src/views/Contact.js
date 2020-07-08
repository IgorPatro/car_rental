import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { response } from 'theme/mainTheme';

// Assets & components
import ContactForm from 'components/molecules/ContactForm';
import ContactInfo from 'components/molecules/ContactInfo';

const StyledWrapper = styled.div`
  padding: 50px 15px 40px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blackAlpha};
`;

const Contact = () => (
  <StyledWrapper>
    <ContactForm />
    <ContactInfo />
  </StyledWrapper>
);

export default Contact;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

// Assets & components
import { Heading } from 'components/atoms/Heading';

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
`;

const onSubmit = (values) => {};

const ContactForm = () => (
  <>
    <StyledHeading>Formularz Kontaktowy</StyledHeading>
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({
        handleSubmit, form, submitting, pristine,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Wyślij
            </button>
          </div>
        </form>
      )}
    />
  </>
);

export default ContactForm;

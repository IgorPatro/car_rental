/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// Assets & components
import { Heading } from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  padding: 15px 15px 30px;
  background-color: white;
  border-radius: 10px;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledInputOuter = styled.div`
  width: 100%;

  ${({ margin }) =>
    margin &&
    css`
      margin: 10px 0;
    `}

  ${({ flex }) =>
    flex &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    `}
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  width: 100%;
  padding: 0 0 3px 0;
  font-family: 'Montserrat', sans-serif;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  font-family: 'Montserrat', sans-serif;
`;

const StyledRodoOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledRodoParagraph = styled(Paragraph)`
  font-size: 1rem;
  max-width: 90%;
`;

const StyledRodoCheckbox = styled.input`
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledSubmitContainer = styled.div`
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmitBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 5px 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: background 0.4s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <StyledWrapper>
        <StyledHeading>Formularz kontaktowy</StyledHeading>
        <StyledForm onSubmit={this.submitForm} action="https://formspree.io/myynzzbp" method="POST">
          <StyledInputsWrapper>
            <StyledInputOuter flex>
              <StyledInput type="text" name="personName" placeholder="Imię i nazwisko" required />
              <StyledInput type="text" name="phone" placeholder="Numer telefonu" required />
            </StyledInputOuter>
            <StyledInputOuter margin>
              <StyledInput type="email" name="email" placeholder="Email" required />
            </StyledInputOuter>
            <StyledInputOuter>
              <StyledTextarea name="message" rows="4" placeholder="Piszę w sprawie..." required />
            </StyledInputOuter>
          </StyledInputsWrapper>
          <StyledRodoOuter>
            <StyledRodoParagraph>
              Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu
              w celu skontaktowania się z Państwem przez Endless Ride oraz przez podmioty trzecie.
            </StyledRodoParagraph>
            <StyledRodoCheckbox type="checkbox" name="rodo" required />
          </StyledRodoOuter>
          <StyledSubmitContainer>
            {status === 'SUCCESS' ? (
              <p>Thanks!</p>
            ) : (
              <StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
            )}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
          </StyledSubmitContainer>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default ContactForm;

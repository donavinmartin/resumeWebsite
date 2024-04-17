import axios from "axios";
import styled from "styled-components";
import { useState, useRef } from "react";
import { mobile, laptop } from "../../helpers/responsive";

const Container = styled.section`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  scroll-margin-top: 25vh;
  ${laptop({
    display: "grid",
    "grid-template-columns": "1fr 2fr",
  })};
`;
const HeadingSection = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
`;
const ContactForm = styled.form`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
const UserInputs = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  ${laptop({
    display: "grid",
    "grid-template-columns": "1fr 1fr",
  })};
`;
const Inputs = styled.div`
  flex: 1;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  &:focus {
    outline: 1px solid black;
  }
  ${mobile({
    padding: ".5rem",
  })};
`;

const TextBox = styled.textarea`
  resize: none;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  &:focus {
    outline: 1px solid black;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StatusMessage = styled.div`
  color: ${(props) => (props.success ? "green" : "red")};
`;
const SendButton = styled.button`
  color: white;
  padding: 15px;
  min-width: 125px;
  background: black;
  font-size: 0.75rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid black;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  &:hover {
    color: black;
    cursor: pointer;
    border: 1px solid;
    background: white;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  ${laptop({
    "min-width": "175px",
  })};
`;
const Contact = () => {
  const [messageIsSending, setMessageIsSending] = useState(false);
  const [messageIsSent, setMessageIsSent] = useState(false);
  const [severMessage, setServerMessage] = useState("");

  const formRef = useRef({
    name: "",
    email: "",
    message: "",
  });

  function handleFormChanges(event) {
    const { name, value } = event.target;
    formRef.current[name] = value;
  }

  function sendInquiry(event) {
    event.preventDefault();
    setMessageIsSending(true);
    axios
      .post("http://localhost:3000/api/contact-inquiry", formRef.current)
      .then(({ data }) => {
        event.target.reset();
        setMessageIsSent(data.messageSent);
        setServerMessage(data.message);
        setTimeout(() => {
          location.reload();
          setMessageIsSending(false);
        }, 3000);
      })
      .catch((error) => {
        setMessageIsSent(false);
        setServerMessage("Try Again Later.");
        setTimeout(() => {
          setMessageIsSending(false);
          location.reload();
        }, 3000);
      });
  }

  return (
    <Container id="contact">
      <HeadingSection>
        <Heading>Contact</Heading>
      </HeadingSection>

      <ContactForm onSubmit={sendInquiry}>
        <UserInputs>
          <Inputs>
            <Input
              name="name"
              placeholder="Name"
              onChange={() => handleFormChanges(event)}
            />

            <Input
              name="email"
              placeholder="Email"
              onChange={() => handleFormChanges(event)}
            />
          </Inputs>
          <TextBox
            name="message"
            placeholder="Message"
            onChange={() => handleFormChanges(event)}
          />
        </UserInputs>
        <BottomContainer>
          <StatusMessage success={messageIsSent}>
            {messageIsSending && severMessage}
          </StatusMessage>
          <SendButton type="submit" disabled={messageIsSending}>
            Send
          </SendButton>
        </BottomContainer>
      </ContactForm>
    </Container>
  );
};

export default Contact;

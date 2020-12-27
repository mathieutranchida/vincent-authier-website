import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

import COLORS from "../constants";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lz9tdc",
        "template_qu7pwha",
        e.target,
        "user_48pmgavLTUZbdVapzMSzv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Wrapper>
        <H1>Contactez moi</H1>
        <Main>
          <Contact>
            <ContactDiv>
              <FiMail />
              <ContactInfo>vince.authier@gmail.com</ContactInfo>
            </ContactDiv>
            <ContactDiv>
              <FiPhone />
              <ContactInfo>(438) 696-9696</ContactInfo>
            </ContactDiv>
            <ContactDiv>
              <FiMapPin />
              <ContactInfo>Montreal, QC</ContactInfo>
            </ContactDiv>
            <ContactDescription>
              Je représente des compagnies de ski depuis maintenant 5 ans. En
              effet, je suis actuellement commandité par Surface Skis, Axis
              Boutique, Giro, Matéina et je suis aussi ambassadeur pour Les
              Sommets. J’ai beaucoup appris au cours de ces années en ce qui
              concerne la représentation ainsi que la promotion de marques.
            </ContactDescription>
          </Contact>
          <EmailJs>
            <Form className="contact-form" onSubmit={sendEmail}>
              <Input type="hidden" name="contact_number" />
              <Div>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="*name"
                  value={name}
                  onChange={(ev) => {
                    setName(ev.target.value);
                  }}
                />
              </Div>
              <Div>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="*email"
                  value={email}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                  }}
                />
              </Div>
              <Div>
                <Textarea
                  name="message"
                  value={message}
                  placeholder="*message"
                  onChange={(ev) => {
                    setMessage(ev.target.value);
                  }}
                />
              </Div>
              <Button
                type="submit"
                value="Send"
                disabled={!name || !email || !message}
              />
            </Form>
          </EmailJs>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.backgroundBody};
  color: ${COLORS.textBody};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

const H1 = styled.h2`
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
`;

const Contact = styled.div``;

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ContactInfo = styled.div`
  margin-left: 10px;
`;

const ContactDescription = styled.div``;

const EmailJs = styled.div``;

const Form = styled.form``;

const Div = styled.div``;

const Input = styled.input``;

const Textarea = styled.textarea``;

const Button = styled.input``;

export default Homepage;

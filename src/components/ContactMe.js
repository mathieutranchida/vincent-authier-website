import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { gsap } from "gsap";

import COLORS from "../constants";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let messageArea = useRef(null);

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
        <H1>Contact</H1>
        <Main>
          <Contact>
            <ContactMain>
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
            </ContactMain>
            <ContactDescription>
              Je représente des compagnies de ski depuis maintenant 5 ans. En
              effet, je suis actuellement commandité par Surface Skis, Axis
              Boutique, Giro, Matéina et je suis aussi ambassadeur pour Les
              Sommets. J’ai beaucoup appris au cours de ces années en ce qui
              concerne la représentation ainsi que la promotion de marques.
            </ContactDescription>
          </Contact>
          <EmailJs>
            <H2>Envoies moi un mail</H2>
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
                    gsap.to(messageArea, {
                      duration: 1,
                      height: "150px",
                      ease: "power2",
                    });
                  }}
                  ref={(e) => {
                    messageArea = e;
                  }}
                  onSelect={() => {
                    gsap.to(messageArea, {
                      duration: 1,
                      height: "150px",
                      ease: "power2",
                    });
                  }}
                />
                <TextareaReducedMotion
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
  @media (max-width: 1000px) {
    padding: 25px 50px 50px 50px;
  }
  @media (max-width: 820px) {
    padding: 10px 50px 50px 50px;
  }
  @media (max-width: 700px) {
    padding: 0px 50px;
  }
  @media (max-width: 650px) {
    padding: 0px 40px;
  }
  @media (max-width: 500px) {
    padding: 0px 25px;
  }
`;

const H1 = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 15pt;
  text-align: center;
  @media (max-width: 700px) {
    margin-bottom: 0px;
  }
`;

const H2 = styled.h2`
  @media (min-width: 701px) {
    display: none;
  }
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  font-size: 13pt;
  text-align: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Contact = styled.div`
  width: 350px;
  margin-right: 50px;
  @media (max-width: 700px) {
    width: 100%;
    margin: 25px 0px;
  }
`;

const ContactMain = styled.div`
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 165px 107px 93px;
    grid-column-gap: 25px;
    justify-content: center;
  }
  @media (max-width: 468px) {
    grid-template-columns: 165px 107px;
    grid-column-gap: 25px;
    justify-content: left;
  }
  @media (max-width: 345px) {
    grid-template-columns: 165px;
    grid-column-gap: 25px;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ContactInfo = styled.div`
  margin-left: 10px;
`;

const ContactDescription = styled.div`
  text-align: justify;
  margin-top: 15px;
`;

const EmailJs = styled.div`
  width: calc(100% - 4px);
`;

const Form = styled.form`
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid white;
  background-color: ${COLORS.backgroundBody};
  color: ${COLORS.textBody};
  font-family: "Barlow Condensed", sans-serif;
  font-size: 12pt;
`;

const Textarea = styled.textarea`
  width: calc(100% + 2px);
  height: 15px;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid white;
  background-color: ${COLORS.backgroundBody};
  color: ${COLORS.textBody};
  font-family: "Barlow Condensed", sans-serif;
  font-size: 12pt;
  padding: 0px 0px 4px 2px;
  @media screen and (prefers-reduced-motion) {
    display: none;
  }
`;

const TextareaReducedMotion = styled.textarea`
  width: calc(100% + 2px);
  height: 150px;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid white;
  background-color: ${COLORS.backgroundBody};
  color: ${COLORS.textBody};
  font-family: "Barlow Condensed", sans-serif;
  font-size: 12pt;
  padding: 0px 0px 4px 2px;
  @media screen and (prefers-reduced-motion: no-preference) {
    display: none;
  }
`;

const Button = styled.input`
  float: right;
  background-color: transparent;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11pt;
  padding: 7px 20px;
  color: ${COLORS.textBody};
  border: 2px solid ${COLORS.bordersContact};
  text-transform: uppercase;
  font-weight: 500;
  margin: 10px 0px 0px 0px;
  &:disabled {
    color: grey;
    border: 2px grey solid;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

export default Homepage;

import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 532px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://www.wanderon.in/workcations/hero1500.jpg");
  background-position: 100% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 10vw;
  padding-right: 40vw;
  @media only screen and (max-width: 1438px) {
    font-size: 0.9em;
  }
  @media only screen and (max-width: 1292px) {
    padding-right: 35vw;
  }
  @media only screen and (max-width: 1174px) {
    font-size: 0.8em;
  }
  @media only screen and (max-width: 1050px) {
    background-image: url("https://www.wanderon.in/workcations/hero1050.jpg");
    height: 420px;
    padding-right: 30vw;
  }
  @media only screen and (max-width: 956px) {
    font-size: 0.7em;
  }
  @media only screen and (max-width: 850px) {
    background-image: url("https://www.wanderon.in/workcations/hero850.jpg");
    height: 370px;
    padding-left: 5vw;
    padding-right: 25vw;
  }
  @media only screen and (max-width: 716px) {
    font-size: 0.6em;
  }
  @media only screen and (max-width: 700px) {
    background-image: url("https://www.wanderon.in/workcations/hero700.jpg");
  }
  @media only screen and (max-width: 650px) {
    height: 320px;
  }
  @media only screen and (max-width: 614px) {
    padding-left: 10vw;
    padding-right: 15vw;
  }
  @media only screen and (max-width: 574px) {
    padding-left: 10vw;
    padding-right: 25vw;
    font-size: 0.5em;
  }
  @media only screen and (max-width: 460px) {
    padding-left: 5vw;
    padding-right: 20vw;
  }
  @media only screen and (max-width: 332px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const Heading = styled.div`
  font-weight: 800;
  font-size: 3.6em;
  margin-bottom: 15px;
  span {
    color: #ff6b6c;
  }
  @media only screen and (max-width: 552px) {
    font-size: 3em;
  }
  @media only screen and (max-width: 398px) {
    font-size: 2.5em;
  }
`;

export const Subheading = styled.div`
  font-weight: 800;
  font-size: 1.8em;
  @media only screen and (max-width: 552px) {
    font-size: 1.6em;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.4em;
  }
  @media only screen and (max-width: 364px) {
    font-size: 1.2em;
  }
`;

export const Caption = styled.div`
  font-weight: 600;
  font-size: 1.35em;
  @media only screen and (max-width: 552px) {
    font-size: 1.2em;
  }
  @media only screen and (max-width: 364px) {
    font-size: 1em;
  }
`;

export const Button = styled.a`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.1em;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6b6c;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  @media only screen and (max-width: 956px) {
    font-size: 1.5em;
  }
  @media only screen and (max-width: 650px) {
    width: 150px;
    height: 40px;
  }
  @media only screen and (max-width: 364px) {
    width: 120px;
    height: 35px;
  }
`;

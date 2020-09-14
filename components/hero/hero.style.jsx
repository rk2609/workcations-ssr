import styled from "styled-components";

export const HeroContainer = styled.div`
  /* cover */
  width: 100%;
  height: 50vw;
  background-image: url("/hero/hero1500.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 600px) {
    background-position: top;
    height: 60vh;
    background-image: url("/hero/hero700.jpg");
  }
`;

export const Container = styled.div`
  /* opacity-film */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SearchBox = styled.div`
  /* search-box */
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2.5vw 0;
  border-radius: 10px;
  margin: 0 15vw 10vw 15vw;

  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 80vw;
    padding: 5vw 0;
  }
`;

export const Heading = styled.span`
  /* heading1 */
  font-size: 2vw;
  font-weight: 600;
  align-self: flex-start;
  padding-left: 2.5vw;

  @media only screen and (max-width: 600px) {
    font-size: 3.6vw;
    padding-left: 5vw;
  }
`;

export const Text = styled.span`
  /* text */
  align-self: flex-start;
  font-size: 1.5vw;
  padding-left: 2.5vw;
  font-weight: 100;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  width: 25vw;
  margin: 3.5vw 0 2.5vw 0;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    margin: 3vw 0;
  }
`;

export const Search = styled.input`
  /* search-field */
  width: 100%;
  font-size: 1.1vw;
  font-weight: 600;
  padding: 0.8vw 1vw;
  margin: 0px;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    font-size: 2vw;
    padding: 1.2vw 2vw;
  }
`;

export const SearchItems = styled.div`
  width: 100%;
  max-height: 10vw;
  background-color: white;
  position: absolute;
  overflow-y: scroll;
  border: 1px solid #707070;
  border-top: 0px;
  border-radius: 0px 0px 5px 5px;
  display: ${(props) => (props.showList ? "flex" : "none")};
  flex-direction: column;
  flex-wrap: nowrap;
  transition: display 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    max-height: 30vh;
  }
`;

export const SearchItem = styled.a`
  width: 100%;
  border-top: 1.5px solid #707070;
  text-transform: capitalize;
  padding: 5px;
  cursor: pointer;
  font-size: 1.1vw;

  :hover {
    background-color: #ff6b6c;
    color: white;
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    font-size: 3vw;
    border-top: 0.5px solid #707070;
  }
`;

export const Button = styled.div`
  /* button */
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6vw;
  font-weight: 600;
  background-color: #ff6b6c;
  color: white;
  padding: 0.5vw 0vw;
  border-radius: 5px;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    font-size: 3vw;
    padding: 1vw 0vw;
  }
`;

export const Features = styled.div`
  /* features */
  color: white;
  font-size: 2.2vw;
  font-weight: 600;
  margin-bottom: 23.5vw;

  @media only screen and (max-width: 600px) {
    font-size: 5vw;
    margin: 8vh 0 6vh 0;
  }
`;

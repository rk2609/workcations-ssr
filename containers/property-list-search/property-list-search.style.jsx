import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media only screen and (max-width: 900px) {
    width: 100%;
    display: block;
  }
`;

export const PropertyListContainer = styled.div`
  width: 73vw;
  margin: 0px auto;
  /*display: flex;
  flex-direction: row;
  flex-wrap: wrap;*/
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: flex-start;
  column-gap: 3vw;

  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: 6vw;
    padding: 0vw 3vw;
  }
`;

export const FilterMobile = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.8fr;
    height: 80px;
    padding: 0px 10px;
    position: fixed;
    width: 100%;
    left: 0%;
    bottom: 0px;
    background: black;
    box-shadow: 0px -3px 6px #00000029;
    border-top: 1.5px solid white;
  }
`;

export const FilterItem = styled.a`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    height: 60%;
  }
`;

export const NoResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 1.2vw;
  color: #ff6b6c;
  margin-bottom: 20px;

  span {
    font-size: 0.9em;
    font-weight: 400;
    color: #707070;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3.2vw;
  }
`;

export const SearchContainer = styled.form`
  position: sticky;
  top: 0px;
  padding: 10px;
  width: 100%;
  margin: 3.5vw 0 2.5vw 0;
  background-color: white;
  z-index: 300;

  @media only screen and (max-width: 769px) {
    margin: 3vw 0;
  }
`;

export const Search = styled.input`
  /* search-field */
  width: 100%;
  font-size: 1.1vw;
  font-weight: 600;
  padding: 1vw 1.2vw;
  margin: 0px;
  text-align: center;

  @media only screen and (max-width: 769px) {
    font-size: 3vw;
    padding: 1.2vw 2vw;
  }

  &&::placeholder {
    color: ${(props) => (props.searchError ? "red" : "#666666")};
    opacity: 1; /* Firefox */
  }

  &&:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  &&::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
`;

export const Button = styled.input`
  /* button */
  width: 25vw;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.5vw;
  font-weight: 400;
  background-color: #ff6b6c;
  color: white;
  padding: 0.5vw 0vw;
  border-radius: 5px;
  margin-top: 20px;

  @media only screen and (max-width: 769px) {
    display: flex;
    width: 100%;
    font-size: 3vw;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 1vw 0vw;
  }
`;

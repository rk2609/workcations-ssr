import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  margin: 2.5vw 0vw 0vw 7vw;
  top: 55px;
  height: calc(100vh - 60px);
  max-height: 100%;
  width: 29vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.29);
  background-color: white;

  @media only screen and (max-width: 900px) {
    margin: 40px 0px 4vw 0px;
    position: unset;
    max-height: unset;
    height: auto;
    width: 90vw;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 10px;
  height: 98vh;

  @media only screen and (max-width: 900px) {
    height: auto;
    width: auto;
    justify-content: unset;
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 90vw;
    background-color: white;
  }
`;

export const Heading = styled.h2`
  font-size: 1.6vw;
  color: rgb(65 65 65);
  margin: 0.5vw 0vw;

  @media only screen and (max-width: 900px) {
    font-size: 5vw;
    margin: 3vw 0vw;
    font-weight: 600;
  }
`;

export const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27vw;
  margin-bottom: 1vw;
  box-shadow: 0px 0px 3px 0px #aaaaaa;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const DurationItem = styled.div`
  font-size: 1vw;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 0.2vw 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: ${(props) =>
    props.isDisabled
      ? "#6a6a6a"
      : props.isActive
      ? "rgb(255, 255, 255)"
      : "rgb(255, 128, 127)"};

  background-color: ${(props) =>
    props.isDisabled
      ? "#f8f7f8"
      : props.isActive
      ? "rgba(255, 128, 127, 1)"
      : "rgba(255, 128, 127, 0.2)"};

  &&:first-child {
    border-radius: 3px 0px 0px 3px;
  }

  &&:last-child {
    border-radius: 0px 3px 3px 0px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3.2vw;
    padding: 1.5vw 0;
  }

  span {
    font-size: 0.8vw;

    @media only screen and (max-width: 900px) {
      font-size: 2.2vw;
    }
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 0;

  @media only screen and (max-width: 900px) {
    width: 95%;
    height: 1px;
    border-width: 0;
    color: silver;
    background-color: silver;
  }
`;

export const CinCoutHeading = styled.span`
  font-size: 1.2vw;
  font-weight: bold;
  color: #414141;
  margin: 0.5vw;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
    margin: 2vw 0vw;
  }
`;

export const RoomsContainer = styled.div`
  max-height: 50vh;
  width: 26.5vw;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 5px;
  justify-items: center;
  overflow: scroll;
  padding: 0.7vw;

  @media only screen and (max-width: 900px) {
    max-height: 1000vw;
    width: 80vw;
    padding: 1.5vw;
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 0.5vw;
  margin-bottom: 1vw;
  display: grid;
  grid-template-columns: 9vw 1fr;
  grid-gap: 5px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 24vw 1fr;
    padding: 2vw;
    margin-bottom: 3vw;
    border-radius: 3px;
  }

  &&:last-child {
    margin-bottom: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.div`
  height: 6vw;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;

  @media only screen and (max-width: 900px) {
    height: 16vw;
    border-radius: 3px;
  }
`;

export const RoomFeatures = styled.div`
  display: flex;
  flex-direction: column;
  color: #444444;
  font-size: 0.8vw;

  @media only screen and (max-width: 900px) {
    font-size: 2.3vw;
  }
`;

export const AvailableRooms = styled.div`
  font-size: 0.9vw;
  font-weight: 600;
  color: #ff6c6b;

  @media only screen and (max-width: 900px) {
    font-size: 2.5vw;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  color: #444444;
  font-size: 1.4vw;

  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
`;

export const SharingItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1vw;

  @media only screen and (max-width: 900px) {
    margin-top: 3vw;
  }
`;

export const Sharing = styled.div`
  display: flex;
  align-items: center;
  font-size: 1vw;
  font-weight: 600;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }

  img {
    height: 1vw;
    margin-right: 5px;

    @media only screen and (max-width: 900px) {
      height: 3vw;
    }
  }
`;

export const PricingContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 5px;
`;

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Striked = styled.div`
  text-decoration: line-through;
  font-size: 1vw;
  font-weight: 600;
  color: #949494;

  @media only screen and (max-width: 900px) {
    font-size: 2.6vw;
  }
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5vw;
  font-weight: 700;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
  }

  span {
    padding: 0.05vw 0.2vw;
    background-color: #00c4ab;
    color: white;
    font-size: 0.8vw;
    font-weight: 600;
    border-radius: 2px;
    margin-left: 0.5vw;

    @media only screen and (max-width: 900px) {
      padding: 0.5vw 1vw;
      font-size: 1.5vw;
      border-radius: 0px;
      margin-left: 1.5vw;
    }
  }
`;

export const Unit = styled.div`
  text-transform: lowercase;
  font-size: 0.7vw;
  font-weight: 700;

  @media only screen and (max-width: 900px) {
    font-size: 2vw;
    font-weight: 400;
  }
`;

export const AddToCartButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const AddButton = styled.div`
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  width: 100%;
  color: white;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.7vw;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95vw;

  @media only screen and (max-width: 900px) {
    height: 6vw;
    font-size: 3.5vw;
  }
`;

export const QuantityContainer = styled.div`
  width: 100%;
  height: 1.7vw;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 900px) {
    height: 6vw;
    font-size: 3.5vw;
  }
`;

export const MinusButton = styled.span`
  background-color: #ff6c6b;
  color: white;
  cursor: pointer;
  border-top: 1.5px solid #ff6c6b;
  border-bottom: 1.5px solid #ff6c6b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 0px 0px 3px;
`;

export const Quantity = styled.span`
  border-top: 1.5px solid #ff6c6b;
  border-bottom: 1.5px solid #ff6c6b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusButton = styled.span`
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  color: white;
  cursor: pointer;
  border-top: 1.5px solid ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  border-bottom: 1.5px solid
    ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 3px 3px 0px;
`;

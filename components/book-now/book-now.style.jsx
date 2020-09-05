import styled from "styled-components";

export const PropertyRoomsContainer = styled.div`
  position: sticky;
  top: 0px;
  max-height: 95vh;
  width: 24vw;
  margin-top: 3vw;
  border-radius: 5px;

  @media only screen and (max-width: 900px) {
    position: static;
    max-height: none;
    margin-top: 0;
    border-radius: 0px;
    width: unset;
    margin-bottom: 50px;
  }
`;

export const PropertyRooms = styled.div`
  position: sticky;
  top: 0px;
  max-height: 100%;
  width: 24vw;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 90vw;
    margin-top: 40px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
    margin-bottom: 4vw;
    max-height: none;
  }
`;

export const PropertyFlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;

  @media only screen and (max-width: 900px) {
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const PropertyRoomsTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    position: sticky;
    width: 90vw;
    top: 0vw;
    background-color: white;
  }
`;

export const BookingHead = styled.h2`
  font-size: 1.6vw;
  color: rgb(65 65 65);
  line-height: 2vw;
  margin: 1.5vw 0vw;

  @media only screen and (max-width: 900px) {
    font-size: 5vw;
    line-height: 8vw;
    margin: 3vw 0vw;
    font-weight: 600;
  }
`;

export const CinCoutContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 80vw;
  }
`;

export const CinCoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5vw 0.5vw;
  font-size: 1vw;

  @media only screen and (max-width: 900px) {
    margin: 0.5vw 0.5vw;
    font-size: 1em;
  }
`;

export const CinCoutLabel = styled.label`
  margin: 0px;

  span {
    font-size: 1.2vw;
    font-weight: bold;
    color: #414141;
    margin: 0px;

    @media only screen and (max-width: 900px) {
      font-size: 4vw;
    }
  }
`;

export const DatePickerDiv = styled.div`
  text-align: center;
  border-bottom: 1.5px solid #ff6b6c;
  cursor: pointer;
  width: 10vw;
  height: 2vw;
  font-size: 0.9vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;

  @media only screen and (max-width: 900px) {
    width: 38vw;
    height: 9vw;
    font-size: 3.5vw;
  }
`;

export const Disclaimer = styled.span`
  align-self: flex-start;
  font-size: 0.8vw;
  margin-left: 0.5vw;
  color: #ff6b6c;
  font-weight: 600;
  line-height: 2vw;
  font-style: italic;

  @media only screen and (max-width: 900px) {
    align-self: unset;
    margin: unset;
    width: 80vw;
    font-size: 3vw;
    line-height: 3vw;
  }
`;

export const Line = styled.div`
  height: 0px;
  width: 22vw;
  margin-bottom: 1vw;
  border: solid 0.5px #c9c9c9;

  @media only screen and (max-width: 900px) {
    width: 80vw;
    margin-bottom: none;
    margin-top: 5vw;
    border: solid 1px #c9c9c9;
  }
`;

export const SelectRooms = styled.span`
  font-size: 1.2vw;
  font-weight: bold;
  color: #414141;
  line-height: 2vw;
  margin-bottom: 0.5vw;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
    line-height: 10vw;
    margin: 2vw 0vw;
  }
`;

export const RoomsContainer = styled.div`
  max-height: 50vh;
  width: 22vw;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding-bottom: 1vw;

  @media only screen and (max-width: 900px) {
    max-height: none;
    width: 80vw;
    display: flex;
    padding-bottom: 4vw;
  }
`;

export const RoomCard = styled.div`
  width: 20vw;
  margin-top: 1vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    width: 75vw;
    margin-top: 4vw;
  }
`;

export const RoomImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RoomImage = styled.div`
  height: 4.2vw;
  width: 6vw;
  margin: 0.4vw 0vw 0.2vw 0.5vw;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 900px) {
    height: 15vw;
    width: 22.5vw;
    margin: 0.7vw 0vw 0.4vw 0.5vw;
  }
`;

export const RoomImageDetails = styled.div`
  color: #707070;
  font-size: 0.6vw;
  margin: 0vw 0vw 0.4vw 0.5vw;
  width: 6vw;

  @media only screen and (max-width: 900px) {
    font-size: 2.4vw;
    width: 22.5vw;
    margin: 0vw 0vw 0.7vw 0.5vw;
  }
`;

export const RoomDetails = styled.div`
  width: 13vw;
  min-height: 4.7vw;
  margin: 0.3vw 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #424950;

  @media only screen and (max-width: 900px) {
    min-height: none;
    width: 48.75vw;
    margin: 1vw 2vw;
  }
`;

export const RoomCategory = styled.span`
  font-size: 1.2vw;
  font-weight: 600;
  padding-left: 5px;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
  }
`;

export const SubCategory = styled.div`
  background-color: white;
  margin-top: 0.6vw;

  @media only screen and (max-width: 900px) {
    margin-top: 2.25vw;
  }
`;

export const RoomSharing = styled.div`
  padding-left: 5px;
  height: 2.2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1vw;
  font-weight: 600;

  @media only screen and (max-width: 900px) {
    height: 8.25vw;
    font-size: 3.75vw;
  }

  img {
    height: 0.8vw;

    @media only screen and (max-width: 900px) {
      height: 3vw;
    }
  }

  span {
    padding-left: 5px;
  }
`;

export const RoomQtyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RoomPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RoomPrice = styled.span`
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 1.5vw;
  padding-left: 5px;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
    line-height: 5.5vw;
  }
`;

export const RoomUnit = styled.span`
  padding-left: 5px;
  font-size: 0.7vw;

  @media only screen and (max-width: 900px) {
    font-size: 2.5vw;
  }
`;

export const RoomQty = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 0.95vw;
  height: 1.7vw;
  color: white;
  background-color: #ff6b6c;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    height: 3.5vw;
    height: 6vw;
    font-size: 3.5vw;
  }
`;

export const AddRoomButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "transparent")};
  border-radius: 3px;
`;

export const PlusMinusButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child,
    &:last-child {
      cursor: pointer;
    }

    &:nth-child(2) {
      background-color: white;
      color: #ff6b6c;
      border-top: 1.5px solid #ff6b6c;
      border-bottom: 1.5px solid #ff6b6c;
    }
  }
`;

export const PlusButton = styled.span`
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "transparent")};
  border-radius: 0px 3px 3px 0px;
`;

export const SelectButton = styled.div`
  border-radius: 5px;
  height: 1.7vw;

  @media only screen and (max-width: 900px) {
    border-radius: 3px;
    height: 6vw;
  }
`;

export const SelectButtonObject = styled.div`
  /*width: 5.1vw;*/
  height: 100%;
  background-color: #ff6b6c;
  color: white;
  font-weight: bold;
  font-size: 0.95vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media only screen and (max-width: 900px) {
    /*width: 18vw;*/
    font-size: 3.5vw;
    border-radius: 3px;
  }
`;

export const AddRoom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  span {
    width: 30%;
    text-align: center;
    font-weight: 600;
    background-color: #ffffff;
    color: #ff6b6c;

    &:first-child,
    &:last-child {
      cursor: pointer;
      color: white;
      background-color: #ff6b6c;
    }

    &:first-child {
      border-radius: 5px 0px 0px 5px;

      @media only screen and (max-width: 900px) {
        border-radius: 3px 0px 0px 3px;
      }
    }

    &:last-child {
      border-radius: 0px 5px 5px 0px;

      @media only screen and (max-width: 900px) {
        border-radius: 0px 3px 3px 0px;
      }
    }
  }
`;

export const AddMeals = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1vw 0vw;

  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin: 4vw 0vw;
  }
`;

export const AddMealsHeading = styled.div`
  font-size: 1vw;
  font-weight: bold;
  color: #414141;

  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
`;

export const AddMealsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 5px 0px 0px 0px;
`;

export const CostingContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0vw 0vw 1vw 0vw;

  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin: 0vw 0vw 4vw 0vw;
  }
`;

export const CostingText = styled.span`
  font-size: 1vw;
  font-weight: bold;
  color: #414141;

  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
`;

export const CostingValue = styled.span`
  color: #ff6b6c;
  font-weight: 600;
  font-size: 1.5vw;

  @media only screen and (max-width: 900px) {
    font-size: 5.5vw;
  }
`;

export const PaymentButton = styled.div`
  width: 22vw;
  background-color: #ff6b6c;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vw 0vw;
  margin-bottom: 1vw;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    width: 80vw;
    padding: 2vw 0vw;
    margin-bottom: 4vw;
  }

  span {
    font-weight: 600;
    font-size: 1.7vw;
    line-height: 1.8vw;
    margin-top: 0.5vw;
    color: white;
    text-transform: uppercase;

    @media only screen and (max-width: 900px) {
      font-size: 4vw;
      line-height: unset;
      margin-top: unset;
    }
  }
`;

export const EmptyCartAlert = styled.div`
  position: fixed;
  bottom: ${(props) => (props.active ? "50px" : "-50px")};
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: red;
  background-color: white;
  border-radius: 5px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease-out;

  span {
    border-radius: 5px;
    border: 1px dotted red;
    background-color: rgba(255, 0, 0, 0.2);
    padding: 20px 30px;
  }
`;

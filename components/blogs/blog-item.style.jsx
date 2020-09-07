import styled from "styled-components";

const Paragraph = styled.div`
  text-align: justify;
  line-height: 2;
  padding: 0px;
`;

const Container = styled.div`
  background-color: white;
  margin: 0px auto;
  width: 80%;
  border-radius: 0px;
  padding: 20px 80px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  overflow-x: hidden;

  @media screen and (max-width: 950px) {
    width: 100%;
    margin: 0px 0px;
  }

  @media screen and (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  hr {
    width: 100%;
    background-color: #00000010;
    height: 0px;
    border: 0px;
    margin: 0px auto;

    @media screen and (max-width: 650px) {
      height: 3px;
    }
  }
`;

export const BlogContainer = styled(Container)`
  display: grid;
  width: 88%;
  grid-template-columns: 1fr;
  grid-gap: 0px 0px;
  padding-bottom: 0px;
  margin-top: 50px;

  @media screen and (max-width: 650px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const BlogContent = styled(Container)`
  width: 80%;
  margin: 0px auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const BlogSidebar = styled(Container)`
  background-color: #ff6b6c;
  width: 100%;
  display: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  height: 0px;
  margin: 0px;
`;

export const BlogTitle = styled.div`
  text-transform: capitalize;
  font-size: 25px;
  font-weight: 700;
  margin: 10px 0px;
  width: 100%;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;

  span {
    background-color: rgba(255, 107, 108, 0.2);
    border: 0.5px solid #ff6b6c;
    color: #ff6b6c;
    border-radius: 3px;
    margin-right: 15px;
    padding: 2px 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #ff6b6c;
      color: white;
    }
  }
`;

export const Text = styled(Paragraph)`
  padding: 0px;
  font-size: 0.9em;
  line-height: 1.7em;

  a {
    text-decoration: none;
    color: #ff6b6c;
    padding-left: 0.3em;
  }
`;

const getImageWidth = (props) => {
  if (props.width) {
    return props.width;
  }

  return 75;
};

export const ImageCon = styled.div`
  width: ${getImageWidth}%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #bbbbbb;

  @media screen and (max-width: 650px) {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Source = styled.div`
  font-size: 12px;
  line-height: 1.5em;
  background-color: #00000090;
  color: white;
  padding: 0px 5px;
  margin: -1.5em auto 0px 0px;
  border-radius: 0px 3px 0px 0px;

  a {
    text-decoration: none;
    color: #ff6b6c;
  }
`;

export const Caption = styled.div`
  font-size: 12px;
  line-height: 1.5em;
  margin: 0px auto;
  text-align: center;
`;

const getMarginTop = (props) => {
  if (props.margin) {
    if (window.screen.width > 800) return props.margin;
    return props.margin / 2;
  }
  return 0;
};

export const SubHeading = styled.div`
  font-weight: 600;
  text-transform: capitalize;
  margin-top: ${getMarginTop}px;
`;

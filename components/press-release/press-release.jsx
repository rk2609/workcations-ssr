import React from "react";

import { Container, Card } from "./press-release.style";

const data = [
  {
    imgName: "india-today.png",
    link:
      "https://www.indiatoday.in/lifestyle/travel/story/what-is-workation-the-new-way-to-travel-and-end-your-wfh-boredom-1719513-2020-09-07",
  },
  {
    imgName: "yahoo.png",
    link:
      "https://in.news.yahoo.com/wanderon-launches-workcation-travel-packages-110902391.html",
  },
  {
    imgName: "outlook.png",
    link:
      "https://www.outlookindia.com/newsscroll/wanderon-launches-workcation-travel-packages-for-millennial-workforce/1939424",
  },
  {
    imgName: "devdiscourse.svg",
    link:
      "https://www.devdiscourse.com/article/business/1219968-wanderon-launches-workcation-travel-packages-for-millennial-workforce",
  },
  {
    imgName: "zenger.svg",
    link:
      "https://www.zenger.news/2020/09/22/homebound-indians-seek-escape-in-workations/",
  },
];

const PressRelease = () => (
  <Container>
    {data.map((item) => (
      <Card key={item.imgName} href={item.link} target="_blank">
        <img src={`/press-release/${item.imgName}`} />
      </Card>
    ))}
  </Container>
);

export default PressRelease;

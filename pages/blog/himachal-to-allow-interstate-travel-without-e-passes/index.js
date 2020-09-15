import { useState, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Head from "next/head";

import Layout from "../../../components/layout/layout";
import SocialShare from "../../../components/social-share/social-share";

import {
  BlogContainer,
  BlogContent,
  BlogSidebar,
  BlogTitle,
  Tags,
  Text,
  ImageCon,
  Image,
  Source,
  Caption,
  SubHeading,
} from "../../../components/blogs/blog-item.style";

const BlogItem = () => {
  const isServer = typeof window === "undefined";

  const [loadElements, setLoadElements] = useState(false);

  const handleScroll = () => {
    if (isServer || loadElements) return;
    setLoadElements(true);
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);
  return (
    <Layout>
      <Head>
        <title>
          True or Not: Himachal Pradesh To Allow Inter-State Travel Without
          E-pass and COVID Report?
        </title>
        <meta
          name="description"
          content="New Himachal Pradesh Travel Guidelines: The government announced new travel guidelines and allowed interstate movement without e-passes. "
        />
        <meta
          name="keywords"
          content="Work From Mountains, Workation, Workcation, Himachal guidelines, Himachal COVID negative report. E pass Himachal"
        />
        <meta
          property="og:image"
          content="/himachal-to-allow-interstate-travel-without-e-passes/himachal-to-allow-interstate-travel-without-e-passes.jpg"
        />
        <meta
          property="og:description"
          content="New Himachal Pradesh Travel Guidelines: The government announced new travel guidelines and allowed interstate movement without e-passes. "
        />
        <meta
          property="og:title"
          content="True or Not: Himachal Pradesh To Allow Inter-State Travel Without E-pass and COVID Report?"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Himachal Guidelines</span>
            <span>E-Pass</span>
          </Tags>
          <BlogTitle>
            True or Not: Himachal Pradesh To Allow Inter-State Travel Without
            E-passe and COVID Report?
          </BlogTitle>
          <SocialShare
            slug={"himachal-to-allow-interstate-travel-without-e-passes"}
          />
          <ImageCon>
            <Image
              src="/himachal-to-allow-interstate-travel-without-e-passes/himachal-to-allow-interstate-travel-without-e-passes.jpg"
              alt="Big News: Himachal Pradesh To Allow Inter-State Travel Without E-pass and COVID Report?"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            In a big announcement on Tuesday 15 September, the Himachal Pradesh
            government granted permission to resume the inter-state travel
            without an e-pass. The state borders of Himachal Pradesh were shut
            for more than five months due to the COVID-19 pandemic. <br />
            <br />
            Earlier this month government had relaxed interstate travel norms
            for tourists so that they could revive the tourism in the state.
          </Text>

          <SubHeading>
            Is it true tourists will not require any E-Pass to enter Himachal?
          </SubHeading>
          {loadElements ? (
            <TwitterTweetEmbed tweetId={"1305879066696974336"} />
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The internet got flooded with articles stating that Himachal Pradesh
            has finally removed the mandatory Himachal E-Pass Registration to
            enter its border! According to{" "}
            <a
              href="https://twitter.com/ANI/status/1305879066696974336"
              target="_blank"
            >
              ANI
            </a>
            , the government officials decided to discontinue the necessity of
            E-Pass to enter the state.
          </Text>

          <SubHeading>
            Will tourists have to Carry Himachal COVID Negative Certificate to
            enter the Border?
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/himachal-to-allow-interstate-travel-without-e-passes/covid-negative.jpg"
                alt="Covid Negative"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            There is a lot of confusion regarding this information among people,
            <a
              href="https://www.outlookindia.com/website/story/himachal-lifts-curb-on-travel-no-covid-19-passes-needed/360372"
              target="_blank"
            >
              some articles
            </a>
            state that the requirement of COVID19 negative certificate to enter
            Himachal too has been scrapped! According to{" "}
            <a
              href="https://www.india.com/news/india/unlock-4-himachal-pradesh-allows-inter-state-travel-without-e-passes-movement-of-state-buses-still-banned-4142322/amp/"
              target="_blank"
            >
              India.com
            </a>{" "}
            state government had permitted the tourists who bring along Covid-19
            negative reports/certificates to enter the state.
          </Text>

          <SubHeading>
            How will the Himachal government implement these new travel
            guidelines in the State?
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/himachal-to-allow-interstate-travel-without-e-passes/new-guidelines.jpg"
                alt="New Guidelines"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            This move of new by the government will surely benefit the people
            associated with the hotel industry and tourism sector. Bars and
            restaurants of the state started their operations from September
            already. Whereas the Kullu and Manali Hoteliers Association had
            announced their decision to continue businesses from October 1. It
            will be really difficult for the government to remove restrictions
            from all places together. Likely there are chances of conflicts
            between state authorities and local unions who are worried about the
            spread of the pandemic due to these new Himachal Travel Guidelines.
            <br />
            <br />
            <li>
              Local administration is a real game-changer here - they are
              implementing their own rules since the border movement has started
              after the Indian Government started to issue the unlock
              guidelines.
            </li>
          </Text>

          {loadElements ? (
            <ImageCon>
              <Image
                src="/himachal-to-allow-interstate-travel-without-e-passes/remote-work-1.jpg"
                alt="Remote Work"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}

          <Text>
            The wandering soul inside our body is craving for travel as early as
            possible, these new travel guidelines from the Himachal government
            will be a game-changer for the tourism sector. People already
            accepted the new form of travel; they are planning for safer long
            stays and workcation (work from mountains). It is highly recommended
            and safer to plan for longer durations with your family and friends
            until we find a cure to battle out with this pandemic.
          </Text>

          <SocialShare
            slug={"himachal-to-allow-interstate-travel-without-e-passes"}
          />
        </BlogContent>
        <BlogSidebar></BlogSidebar>
      </BlogContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default BlogItem;
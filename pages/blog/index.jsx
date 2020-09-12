import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout/layout";

import Heading from "../../components/heading/heading";

import {
  BlogContainer,
  Grid,
  GridItem,
  Title,
  ImageCon,
  Image,
  Date,
  Tags,
  Description,
  ReadMore,
} from "../../components/blogs/blog.style";

const BlogCollection = () => {
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
        <title>Workcations Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Heading>Your Workcations Guide</Heading>
        <Grid>
          <Link href="/blog/workcations-the-new-normal-of-work-life" passHref>
            <GridItem>
              <Title>
                Workcations : The New Trend that Brings Travel and Work Together
              </Title>
              <ImageCon>
                <Image
                  src="https://www.wanderon.in/wp-content/uploads/2020/08/workcations.jpg"
                  alt="Workcations : The New Trend that Brings Travel and Work Together"
                />
              </ImageCon>
              <Description>
                Work and Vacation (Workcations) is dreamy and fascinating as it
                sounds, waking up to breathtaking sunrise vistas, sipping a cup
                of tea with a panoramic view of nature, and your work desk
                pointing towards your favorite mountains or beaches, that is all
                we need now.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>14th Aug 2020</Date>
              <Tags>
                <span>Remote Work</span>
                <span>Workcations</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/workcation-faq-all-you-want-to-know-about" passHref>
            <GridItem>
              <Title>
                Everything You Should Know About The New Face Of Travel -
                Workcations
              </Title>
              <ImageCon>
                <Image
                  src="https://www.wanderon.in/workcations/blogs/workcation-faq-all-you-want-to-know-about.jpg"
                  alt="Everything You Should Know About The New Face Of Travel - Workcations"
                />
              </ImageCon>
              <Description>
                Still, have queries about the workcation? Then, check out this
                FAQ with detailed information related to workcation - the new
                phase of travel. Pandemic has hit all the business sectors to a
                great extent, but the tourism sector has been hit the worst. Due
                to initial restrictions across the country, travel came to a
                standstill.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>02nd Sep 2020</Date>
              <Tags>
                <span>Remote Work</span>
                <span>Workcations</span>
              </Tags>
            </GridItem>
          </Link>

          <Link
            href="/blog/work-from-mountain-destinations-with-good-wifi"
            passHref
          >
            <GridItem>
              <Title>
                Perfect Workcations Spots with the most reliable WiFi
              </Title>
              <ImageCon>
                <Image
                  src="https://www.wanderon.in/workcations/blogs/work-from-mountain-destinations-with-good-wifi.jpg"
                  alt="Perfect Workcations Spots with the most reliable WiFi"
                />
              </ImageCon>
              <Description>
                Planning for a workcation? Check out the list of places with
                Perfect Internet connectivity to plan hassle-free work from
                mountain vacation. The future of remote working in India is very
                bright, and it is evolving at a quick pace. A ton of companies
                permitted their employees to work from remote destinations. Now
                with the freedom of working from anywhere, you can plan a
                staycation at your favorite travel destination.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>02nd Sep 2020</Date>
              <Tags>
                <span>Remote Work</span>
                <span>Workcations</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/impact-of-remote-working-in-india" passHref>
            <GridItem>
              <Title>
                How The World Will Change When Everyone Opt For Remote Working
              </Title>
              <ImageCon>
                <Image
                  src="https://www.wanderon.in/workcations/blogs/impact-of-remote-working-in-india.jpg"
                  alt="How The World Will Change When Everyone Opt For Remote Working"
                />
              </ImageCon>
              <Description>
                Remote work is here to stay! Here is how the corporate world
                will change if everyone opts for Remote Working. COVID-19 hit us
                fast and hard. Each one of us has been struggling to accommodate
                our mindset and habits so that we could start working from
                places far away from our offices.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>02nd Sep 2020</Date>
              <Tags>
                <span>Remote Work</span>
                <span>Workcations</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/benefits-from-working-from-mountains" passHref>
            <GridItem>
              <Title>Million Dollar Benefits Of Working From Mountains</Title>
              <ImageCon>
                <Image
                  src="https://www.wanderon.in/workcations/blogs/benefits-from-working-from-mountains.jpg"
                  alt="Million Dollar Benefits Of Working From Mountains"
                />
              </ImageCon>
              <Description>
                Living in the mountains is like a dream for everyone! Here are
                seven benefits of living in the mountains which worth a million
                dollars. Mountains always give a homely feeling or warmth to
                every human. The cool breeze touching your face while standing
                on the edge of a cliff is beyond everything. It's such things
                that make us fall for mountains every time.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>02nd Sep 2020</Date>
              <Tags>
                <span>Remote Work</span>
                <span>Workcations</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/why-travel-should-resume" passHref>
            <GridItem>
              <Title>
                To Travel, Or Not To Travel: Why Travel Should Resume?
              </Title>
              <ImageCon>
                <Image
                  src="https://www.wanderon.in/workcations/blogs/why-travel-should-resume.jpg"
                  alt="How The World Will Change When Everyone Opt For Remote Working"
                />
              </ImageCon>
              <Description>
                With uncertainty and fear hanging over traveling, no one knows
                how quickly the tourism sector will recover. But here are the
                reasons why travel should start soon. India has no dearth of
                beautiful destinations for travellers. No wonder, people all
                across the world specially come here to explore what this
                largest democracy in the world has to offer.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>04th Sep 2020</Date>
              <Tags>
                <span>Remote Work</span>
                <span>Workcations</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/the-travel-trend-of-2020-2021" passHref>
            <GridItem>
              <Title>Old Wine, New Bottle: The Travel Trend Of 2020-2021</Title>
              <ImageCon>
                <Image
                  src="/the-travel-trend-of-2020-2021/the-travel-trend-of-2020-2021.jpg"
                  alt="Old Wine, New Bottle: The Travel Trend Of 2020-2021"
                />
              </ImageCon>
              <Description>
                The Travel Industry has been shaken by the COVID-19 outbreak
                from its core. Here're the future travel trends for 2020-2021!
                Remember the good old days when we simply packed our bags and
                embarked on impromptu trips? Well, the onset on new normal has
                changed a lot of aspects in our lives including travel.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>07th Sep 2020</Date>
              <Tags>
                <span>Travel Trends</span>
                <span>Future of Travel</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/safe-tourism-during-covid19" passHref>
            <GridItem>
              <Title>
                Step Out With CARE: Here’s How Communities Can Promote Safe
                Tourism During COVID19
              </Title>
              <ImageCon>
                <Image
                  src="/safe-tourism-during-covid19/safe-tourism-during-covid19.jpg"
                  alt="Step Out With CARE: Here’s How Communities Can Promote Safe Tourism
            During COVID19"
                />
              </ImageCon>
              <Description>
                It will be entirely different this time. Say Hi to COVID19-free
                road trips with our tips and tricks. Coronavirus Precautions
                planning a Trip. To travel or not to travel is the big question
                looming. However, the answer is an eternal YES if safety
                measures are taken. The thing of utmost importance is safety
                nowadays and one should make sure that the place you are
                visiting and the hotel you are planning to lodge at are adhering
                to safety measures.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>08th Sep 2020</Date>
              <Tags>
                <span>Covid19 Precautions</span>
                <span>Safety Tips</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/tips-to-travel-safely-during-covid19" passHref>
            <GridItem>
              <Title>How To Travel Safe During COVID19 Times?</Title>
              <ImageCon>
                <Image
                  src="/tips-to-travel-safely-during-covid19/tips-to-travel-safely-during-covid19.jpg"
                  alt="How To Travel Safe During COVID19 Times?"
                />
              </ImageCon>
              <Description>
                Want to plan to a trip but worried about corona? Check out this
                Road trip checklist to keep yourself safe during Corona.The
                times are tough and mental health of people as well as our
                economy graph is on a downward spiral. Resuming travel can be
                considered as an excellent move if both, the service providers
                as well as travellers cooperate.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>10th Sep 2020</Date>
              <Tags>
                <span>COVID Safety</span>
                <span>Travel Tips</span>
              </Tags>
            </GridItem>
          </Link>

          <Link href="/blog/panoramic-treks-around-kasol" passHref>
            <GridItem>
              <Title>Workcation In Kasol? Unwind with Some Nearby Treks</Title>
              <ImageCon>
                <Image
                  src="/panoramic-treks-around-kasol/panoramic-treks-around-kasol.jpg"
                  alt="Workcation In Kasol? Unwind with Some Nearby Treks"
                />
              </ImageCon>
              <Description>
                What would be better to indulge in a trekking experience over a
                weekend? Panoramic trekking destinations around kasol you
                couldn't afford to miss.While in offices, you tend to break free
                from stress by taking small chai breaks. How about you do
                something more adventurous? While on workcation in Kasol, you
                can unwind by going on these beautiful treks. They are close by
                and a great way to feel refreshed.
              </Description>
              <ReadMore>Read More</ReadMore>
              <Date>12th Sep 2020</Date>
              <Tags>
                <span>Kasol</span>
                <span>Trekking</span>
              </Tags>
            </GridItem>
          </Link>
        </Grid>
      </BlogContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default BlogCollection;

import React, { useState, Fragment } from "react";

import { Flex, FlexItem, Ques, Ans } from "./faq.style";

const FAQ = [
  {
    Q: "Is the COVID-19 RT-PCR negative report compulsory? ",
    A:
      "Yes, it is mandatory to carry a hard copy of negative COVID-19 RT-PCR test report.",
  },

  {
    Q:
      "Is it mandatory to carry the E-permit of the state authority that I am travelling to?",
    A:
      "Yes, it is absolutely necessary that you carry the approved E-permit of the state authority that you are travelling to.",
  },

  {
    Q:
      "What would be the mode of transport which I can avail to reach the destination?",
    A:
      "It would be highly recommended that you come by your own vehicle. However, we can assist you with a fully sanitised taxi service from the desired pick-up point to the property and back.",
  },

  {
    Q: "What happens if I’m travelling from HIGH LOAD COVID city? ",
    A:
      "Yes, you can surely travel under the proper guidelines as stated by the government.",
  },

  {
    Q: "What all documents do I need to carry?",
    A:
      "We insist you to carry hard copies of ICMR approved COVID RT-PCR negative test report, the E-permit pass for the state you’re travelling to, original address proof and govt. issued ID proof.",
  },

  {
    Q:
      "What if I’m not allowed to cross the checkpoint barriers/state borders and am stopped by the state authorities despite of presenting all the valid legal documents?",
    A:
      "If at all this situation arises, you’ll have to head back to your home address and you can reschedule your stay with us.",
  },

  {
    Q: "Will you guys help me with the COVID test procedure?",
    A:
      "Though we highly recommend you to get prescription from your family doctor and then undergo the test, but in case you seek our assistance, we can help you to get the RT-PCR COVID test from an ICMR approved laboratory at a service fees of Rs. 300.",
  },

  {
    Q:
      "What if I develop any COVID like symptoms or get in contact with someone who has tested positive during the tenure of my stay?",
    A:
      "We highly recommend you to get tested at the nearest COVID test lab and follow the government guidelines. \nIf tested positive, you’ll have to undergo quarantine and have to follow all the government regulations and guidelines. \nIf tested negative, you can continue your stay at the property with a little more precautional measures.",
  },
];

const Faqs = () => {
  const [open, setOpen] = useState(new Array(FAQ.length).fill(false));

  const expandFaq = (i) => {
    let openState = new Array(FAQ.length).fill(false);
    openState[i] = true;
    setOpen(openState);
  };

  const collapseFaq = () => {
    setOpen(new Array(FAQ.length).fill(false));
  };

  return (
    <Fragment>
      <h2>FAQs</h2>
      <Flex>
        {FAQ.map((item, i) => (
          <FlexItem key={i}>
            <Ques
              onClick={() => {
                open[i] ? collapseFaq() : expandFaq(i);
              }}
            >
              <span>
                Q{i + 1}. {item.Q}
              </span>
              {open[i] ? (
                <img src="/minus.svg" alt="Collapse Answer" />
              ) : (
                <img src="/plus.svg" alt="Expand Answer" />
              )}
            </Ques>
            <Ans isOpen={open[i]}>
              {item.A.split("\n").map((ans, j) => (
                <p key={"fp" + (i + j + 1)}>{ans}</p>
              ))}
            </Ans>
          </FlexItem>
        ))}
      </Flex>
    </Fragment>
  );
};

export default Faqs;

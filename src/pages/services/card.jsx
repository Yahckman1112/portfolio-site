import React from "react";
import { Text, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { TfiWorld } from "react-icons/tfi";
import { TbListCheck } from "react-icons/tb";
import { DiResponsive } from 'react-icons/di'

import styles from "./card.module.scss";
function CardComponent(props) {
  const cardText =[
    {
      logo:<TfiWorld size={80} className={styles.logs} />,
      header: 'web Design',
      body: `I bring 
      the wireframes of the UX designer to life through HTML5,CSS3, 
      JavaScript and its frame work as well as collaborating with Back End Developers
        to create a stellar finished product.`
    },
    {
      logo:< TbListCheck size={80} className={styles.logs} />,
      header: 'web Development',
      body: `I develop and Implement project scope and timelines based on the design-develop-deploy process.

      I Collaborate with UX designers and Back End Developers and ensured coherence between all parties`
    },
    {
      logo:< DiResponsive size={80} className={styles.logs} />,
      header: 'Responsive Design',
      body: ` I build web pages that render well on all screen sizes and resolutions (with advance CSS ) while ensuring good usability.`
    },
  ]

  return (
  <div className="row">

        {cardText.map(cText=>(
      <div className="col-12 col-lg-4 ">
        <Card className={styles.carded}>
          <div className={styles.logo}>
            {cText.logo}
          </div>
          <CardHeader className={styles.card_header}>{cText.header}</CardHeader>
          <CardBody>
            <Text className={styles.para}>
            { cText.body }
            </Text>
          </CardBody>
        </Card>
      </div>
        ))}
  </div>
  );
}

export default CardComponent;

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
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora
      perferendis eum non provident`
    },
    {
      logo:< TbListCheck size={80} className={styles.logs} />,
      header: 'web Development',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora
      perferendis eum non provident`
    },
    {
      logo:< DiResponsive size={80} className={styles.logs} />,
      header: 'Responsive Design',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora
      perferendis eum non provident`
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

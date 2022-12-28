import React from "react";
import { Text, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { TfiWorld } from "react-icons/tfi";

import styles from "./card.module.scss";
function CardComponent(props) {
  return (
    <div>
      <Card className={styles.card}>
        <div className={styles.logo}>
          <TfiWorld size={80} className={styles.logs} />
        </div>
        <CardHeader className={styles.card_header}>Web Design</CardHeader>

        <CardBody>
          <Text className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora
            perferendis eum non provident
          </Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComponent;

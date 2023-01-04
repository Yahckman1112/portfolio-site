import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

import styles from './acord.module.scss'

function Acord({title, desciption, role, technology,pages}) {
    return (
        <div className={styles.acord}>
            <Accordion defaultIndex={[1]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className={styles.title_head}>
          {title}

        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <p className={styles.header}>Description</p>
      <p className={styles.body}>
      {desciption}
      </p>
    
    <p className={styles.header}>My Role</p>
    <p className={styles.body}>
    {role}
    </p>

    <p className={styles.header}> Technolgy/Dependency </p>
    <p className={styles.body}>
        {technology}
    </p>

    <p className={styles.header}>Pages</p>
    <p className={styles.body} >
        {pages}
    </p >
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </div>
    );
}

export default Acord;
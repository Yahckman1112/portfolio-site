import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Stack, Heading, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import img from './../../assets/img/work-1.jpg'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide'
import {BiLinkExternal} from 'react-icons/bi'
import styles from './card.module.scss'
function CardPort(props) {
    const datas=[
        {
            head:'Blog Site',
            title: 'Web Design',
            date: 'Jan 1.2023',
            link:'https://icopy.vercel.app/',
            img : img

        },
        {
            head:'Khayrul Adabi School',
            title: 'Web Design',
            date: 'Jan 1.2023',
            link:'https://ka-portal.vercel.app',
            img : img
        },
        {
            head:'Testing',
            title: 'Web Design',
            date: 'Jan 1.2023',
            link:'https://my-test-eosin.vercel.app/',
            img : img
        },
    
    ]

    return (
        <div className='container'>
            <div className="row">
            {datas.map(data=>(
                
                
                <div className="col-12 col-lg-4 col-md-6 mr-2">
                    <Slide bottom>
<Card>
  <CardBody>
    <Image
      src={data.img}
      alt='work image'
      borderRadius='lg'
      className={styles.img}
    />
    <Stack mt='10' spacing='3'>
      <Heading size='lg'  className={styles.card_head}>{data.head}</Heading>
    </Stack>
    <div className={styles.text}>
        <p><span className={styles.title}>{data.title}</span><span className={styles.date}>/ {data.date}</span></p>
        <a className={styles.logo} href={data.link} target='_blank'> <BiLinkExternal size={30}/> </a>
    </div>

    <a href="">Learn more </a>
  </CardBody>
 
</Card>
                  </Slide>
                </div>

                
            ))}
            </div>
        </div>
    );
}

export default CardPort;
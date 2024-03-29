import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import img from "./../../assets/img/work-1.jpg";
import icopy from "./../../assets/img/icopy.PNG";
import kaport from "./../../assets/img/ka-port.PNG";
import test from "./../../assets/img/test.PNG";
import dataWheel from "../../assets/img/dataWheel.PNG";
import fruity from "./../../assets/img/fruity.PNG";
import cospire from '../../assets/img/cospire.PNG'

import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./card.module.scss";
import Acord from "./../../components/acordion/acord";
function CardPort({ title, desciption, role, technology, pages }) {
  const datas = [
    
    {
      head: "Co-Spire",
      title: "Web Design",
      date: "Nov 1.2023",
      link: "https://cospirehub.com/",
      img: cospire,
      desciption: `Co-Spire is a web app where the host can create their work space and user can choose the convinient wrkspace for him`,
      role: `i build part of the front end user interface by working with the UI designer and connect the UI with the 
      backend by working with the backend developer, by enabling cross origin resource sharing `,
      technology: `React.ts, ant design, SCSS, and other dependencies`,
      pages:`Home, Sigup, Login(For Host and Custumer), Dashboard, booking and other pages `,
    },
    {
      head: "Khayrul Adabi School",
      title: "Web Design",
      date: "Jan 1.2023",
      link: "https://ka-portal.vercel.app",
      img: kaport,
      desciption: `KA-PORTAL is a an effective school app that ttok care of alot of difficult tasks
            in the school, like pasting exam results manually,registratin of student that attracts bunch of files and so much more... 

            `,
      role: `i build part of the front end user interface by working with the UI designer and connect the UI with the 
            backend by working with the backend developer, by enabling cross origin resource sharing `,
      technology: "React.js, react-bootstrap,slider.js,react-icons",
      pages: "Home page, Lecture, Student Registration , Student Result....",
    },
    {
      head: "Fruity",
      title: "Web Design",
      date: "Aug 20.2023",
      link: "https://fruity-ten.vercel.app/",
      img: fruity,
      desciption: `Developed and launched the innovative "Fruity" web application, transforming the online shopping landscape for fresh produce. This platform redefines the fruit purchasing experience, offering users a seamless and intuitive way to explore and acquire a diverse selection of premium-quality fruits. By integrating user preferences, the app delivers personalized recommendations, ensuring a uniquely tailored shopping journey. `,
      role: `i solely build the website`,

      technology: `React.js, Tailwind, 
      font-awesome, react-icon, SASS
      Node.js, MongoDB, Mongoose, Express
      `,
      pages: `Home, About, News, Contact and Shop`,
    },
    // {
    //   head: "Blog Site",
    //   title: "Web Design",
    //   date: "Jan 1.2023",
    //   link: "https://icopy.vercel.app/",
    //   img: icopy,
    //   desciption: `Icopy-BLOG is an online journal or 
    //         informational website that offers regularly updated content on politics 
    //         politics. football and other news).
    //         And user can also rech-out to the copy writer for writeup on advertisment and marketing .`,
    //   role: `I solely build the front end user 
    //         interface and then connect the UI with the by backend API.`,
    //   technology:
    //     "React.js, Material UI, Bootsrtap, font-awesome, react bootstrap, react-icon",
    //   pages: "Home, About, Service, Blog, Contact......",
    // },

    {
      head: "Data-Weel",
      title: "Web Design",
      date: "March 1.2023",
      link: "https://vtu-site.vercel.app/",
      img: dataWheel,
      desciption: "Responsive landing page for data-app",
      role: "I solely build the website",
      technology:
        " Next.js, react-bootstrap, react-icons, SASS, formik, yup, and email.js",
      pages: "Landing page",
    },
    // {
    //   head: "Testing",
    //   title: "Web Design",
    //   date: "Jan 1.2023",
    //   link: "https://my-test-eosin.vercel.app/",
    //   img: test,
    //   desciption,
    //   role,
    //   technology,
    //   pages,
    // },
  ];

  return (
    <div className="container">
      <div className="row">
        {datas.map((data) => (
          <div className="col-12 col-lg-12 col-md-12 mr-2">
            <Slide bottom>
              <Card className={styles.card}>
                <CardBody>
                  < a href={data.link} target="_blank">
                  
                  <Image
                    src={data.img}
                    alt="work image"
                    borderRadius="lg"
                    className={styles.img}
                  />
                  </a>
                  <Stack mt="10" spacing="3">
                    <Heading size="lg" className={styles.card_head}>
                      {data.head}
                    </Heading>
                  </Stack>
                  <div className={styles.text}>
                    <p>
                      <span className={styles.title}>{data.title}</span>
                      <span className={styles.date}>/ {data.date}</span>
                    </p>
                    <a className={styles.logo} href={data.link} target="_blank">
                      {" "}
                      <BiLinkExternal size={20} />{" "}
                    </a>
                  </div>

                  <Acord
                    title="Read more"
                    desciption={data.desciption}
                    role={data.role}
                    technology={data.technology}
                    pages={data.pages}
                  />
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

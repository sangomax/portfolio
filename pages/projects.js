import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import styles from '/styles/ProjectContainer.module.css'
import { Container } from '@material-ui/core';
import ProjectContainer from '../comp/ProjectContainer';
import Head from 'next/head';

const data = 
  [
    {
      "title": "Trivia Game",
      "subtitle": "Java Group Project",
      "image": "trivia_game.png",
      "body":"Trivia is a quiz game which consists of spinning roulette and answer the question related to some topics by Java, HTML, CSS, JavaScript, Spring Boot and Thymeleaf",
      "link":"https://github.com/sangomax/finalProject",
      "id": 1
    },
    {
      "title": "Famous Spot Tour",
      "subtitle": "IOS Group Project",
      "image": "famous_spot_tour.png",
      "body":"An application that gives tourists suggestions on where to go in Vancouver by Swift, MapKit and Firebase                                                           ",
      "link":"https://github.com/TakayasuNasu/FamousSpotTour",
      "id": 2
    },
    {
      "title": "Personal Portfolio",
      "subtitle": "Portfolio Website",
      "image": "portfolio.png",
      "body":"Personal portfolio website by next.js, react and Material UI",
      "link":"https://github.com/sangomax/portfolio",
      "id": 3
    }
  ]


const projects = () => {

    return ( 
      <>
        <Head>
          <title>Portfolio AGdeO | Projects</title>
          <meta name="keywords" content="portfolio"/>
          <link rel="icon" href="/portfolio.ico" />
        </Head>
        <Container className={styles.root}>

          <Grid container spacing={6} >
            <Grid item xs={12} >
              <ListSubheader component="div" className={ styles.gridListTitle } >Projects</ListSubheader>
            </Grid>
            
            { data.map((project) => (
                <Grid item xs={12} sm={6} key={project.id} >
                  <ProjectContainer projectDta={ project }  />
                </Grid>
            ))}
            
          </Grid>
        </Container>
      </>
     );
}
 
export default projects;

import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import styles from '/styles/ProjectContainer.module.css'
import { Container } from '@material-ui/core';
import projectsData from '../data/db'
import ProjectList from './projectList';
import HeadPortfolio from '../comp/Head';

const projects = () => {

    return ( 
      <>
        <HeadPortfolio title="Portfolio AGdeO | Projects" />

        <Container className={styles.root}>

          <Grid container spacing={6} >
            <Grid item xs={12} >
              <ListSubheader component="div" className={ styles.gridListTitle } >Projects</ListSubheader>
            </Grid>
            
            <ProjectList data={projectsData.projects} />
            
          </Grid>
        </Container>
      </>
     );
}
 
export default projects;

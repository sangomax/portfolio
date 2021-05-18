import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import styles from '/styles/ProjectContainer.module.css'
import { Container } from '@material-ui/core';
import ProjectContainer from '../comp/ProjectContainer';
import Card from '@material-ui/core/Card';
import Head from 'next/head';

const projects = () => {
    return ( 
      <>
        <Head>
          <title>Portfolio AGdeO | Projects</title>
          <meta name="keywords" content="portfolio"/>
        </Head>
        <Container className={styles.root}>

          <Grid container spacing={6}>
            <Grid item xs={12} >
              <ListSubheader component="div" className={ styles.gridListTitle } >Projects</ListSubheader>
            </Grid>
            <Grid item xs={12} sm={6} md={6} key={1}>
              <ProjectContainer />
            </Grid>
            <Grid item xs={12} sm={6} md={6} key={2}>
              <ProjectContainer />
            </Grid>
            <Grid item xs={12} sm={6} md={6} key={3}>
              <ProjectContainer />
            </Grid>
          </Grid>
        </Container>
      </>
     );
}
 
export default projects;










// function TitlebarGridList() {
  
//     return (
//       <div className={styles.root}>
//         <GridList cellHeight={180} className={styles.gridList} spacing={20}>
//           <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//             <ListSubheader component="div" >Projects</ListSubheader>
//           </GridListTile>
//           {/* {tileData.map((tile) => ( */}
//             <GridListTile key={1}>
//               <img src="/logo_green.png" />
//               <GridListTileBar
//                 title={'Title test'}
//                 subtitle={<span>by: {'Adriano'}</span>}
//                 actionIcon={
//                   <IconButton aria-label={`info about ${''}`}>
//                     <InfoIcon />
//                   </IconButton>
//                 }
//               />
//             </GridListTile>
//             <GridListTile key={2}>
//               <img src="/logo_green.png" />
//               <GridListTileBar
//                 title={'Title test'}
//                 subtitle={<span>by: {'Adriano'}</span>}
//                 actionIcon={
//                   <IconButton aria-label={`info about ${''}`} >
//                     <InfoIcon />
//                   </IconButton>
//                 }
//               />
//             </GridListTile>
//           {/* ))} */}
//         </GridList>
//       </div>
//     );
//   }
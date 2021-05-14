import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styles from '/styles/Home.module.css'

const projects = () => {
    return ( 
        <div className={styles.root}>
            <GridList cellHeight={370} className={styles.gridList} spacing={40}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className={ styles.gridListTitle } >Projects</ListSubheader>
                </GridListTile>

                <GridListTile key={1} >
                  <div className={styles.gridListContent} >
                    <img src="/logo_blue.png" style={{ backgroundColor: 'white', width: 'auto'}} />
                    <GridListTileBar style={{ verticalAlign: 'middle', height: '40px',bottom: 'auto', width:300 }}
                        title={ 'Project Name' }
                        subtitle={<span>{ 'What is Project?' }</span>}
                    />
                    <p className={ styles.gridListInfo } >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit etiam vehicula, mus curabitur enim in ultricies tempor leo fames iaculis orci, bibendum ultrices quisque cras vel libero tincidunt consequat.
                    </p>
                  </div>
                </GridListTile>
                
                <GridListTile key={2} >
                  <div className={styles.gridListContent} >
                    <img src="/logo_blue.png" style={{ backgroundColor: 'white', width: 'auto'}} />
                    <GridListTileBar style={{ verticalAlign: 'middle', height: '40px',bottom: 'auto', width:300 }}
                        title={ 'Project Name' }
                        subtitle={<span>{ 'What is Project?' }</span>}
                    />
                    <p className={ styles.gridListInfo } >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit etiam vehicula, mus curabitur enim in ultricies tempor leo fames iaculis orci, bibendum ultrices quisque cras vel libero tincidunt consequat.
                    </p>
                  </div>
                </GridListTile>

                <GridListTile key={3} >
                  <div className={styles.gridListContent} >
                    <img src="/logo_blue.png" style={{ backgroundColor: 'white', width: 'auto'}} />
                    <GridListTileBar style={{ verticalAlign: 'middle', height: '40px',bottom: 'auto', width:300 }}
                        title={ 'Project Name' }
                        subtitle={<span>{ 'What is Project?' }</span>}
                    />
                    <p className={ styles.gridListInfo } >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit etiam vehicula, mus curabitur enim in ultricies tempor leo fames iaculis orci, bibendum ultrices quisque cras vel libero tincidunt consequat.
                    </p>
                  </div>
                </GridListTile>

            </GridList>
            
            

        </div>
     );
}
 
export default projects;










function TitlebarGridList() {
  
    return (
      <div className={styles.root}>
        <GridList cellHeight={180} className={styles.gridList} spacing={20}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" >Projects</ListSubheader>
          </GridListTile>
          {/* {tileData.map((tile) => ( */}
            <GridListTile key={1}>
              <img src="/logo_green.png" />
              <GridListTileBar
                title={'Title test'}
                subtitle={<span>by: {'Adriano'}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${''}`}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile key={2}>
              <img src="/logo_green.png" />
              <GridListTileBar
                title={'Title test'}
                subtitle={<span>by: {'Adriano'}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${''}`} >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          {/* ))} */}
        </GridList>
      </div>
    );
  }
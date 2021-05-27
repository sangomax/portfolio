import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import { Container, IconButton, Typography } from '@material-ui/core';
import styles from '/styles/Profile.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import HeadPortfolio from '../comp/Head';
import Skills from './skills'
import SkillsData from '../data/db'

const Profile = () => {
    return ( 
            <> 
                <HeadPortfolio title="Portfolio AGdeO | Profile" />

                <Container className={ styles.root }>

                    <Grid container spacing={3} alignItems="center" justify="center">
                        <Grid item xs={12} >
                            <ListSubheader component="div" className={ styles.gridListTitle } >Profile</ListSubheader>
                        </Grid>


                        <Grid item xs={12} sm={3}>
                            <Card className={ styles.gridPicture }>
                                <CardMedia image="/profile_photo.png" style={{ paddingTop: '100%', borderRadius: '25px' }}/>
                            </Card>
                        </Grid>

                        <Grid container spacing={3} alignItems="center" justify="center" style={{ margin: '10px'}}>
                            
                            <Grid item xs={12} sm={2}>
                                <a href="/Resume_Adriano_Gaiotto.pdf" download>
                                    <IconButton className={ styles.profileLinks } >
                                        <GetAppIcon/>
                                    </IconButton>
                                </a>
                                Resume
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <IconButton className={ styles.profileLinks } >
                                    <EmailIcon />
                                </IconButton>
                                    adriano.gaiotto@gmail.com
                            </Grid>
                               

                            <Grid item xs={10} xl={10}>
                                <Card className={ styles.gridProfile }>
                                    <CardContent>
                                        <Typography variant="body1"  >
                                        I am a Java developer with experience supporting systems in a production environment where I never ran away from problems and challenges before completing and resolving them. I left Brazil to realize a dream of living and working in another country and in turn to continue learning and growing as a developer and person with all challenges show in my way.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>  

                            <Grid item xs={10}>
                                <Card className={ styles.gridSkill }>
                                    <CardContent>
                                        <Typography variant="h4">
                                            Skill
                                        </Typography>
                                        <br />
                                        { SkillsData.skills.map( (skill) => (
                                            <Skills title={skill.title} content={skill.content} />
                                        ))}
                                        
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>

                </Container>
            </>
     );
}
 
export default Profile;
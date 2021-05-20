import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import { Container, IconButton, Typography } from '@material-ui/core';
import styles from '/styles/Profile.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';

const Profile = () => {
    return ( 
            <> 
                <Head>
                    <title>Portfolio AGdeO | Profile</title>
                    <meta name="keywords" content="portfolio"/>
                </Head>
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
                                        <Typography variant="body2" color="textSecondary" >
                                            Lorem ipsum dolor sit amet consectetur adipiscing.
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
                                        <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                                            Language
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Java, Swift, Python
                                        </Typography>
                                        <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                                            Framework
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Spring Boot, JSF, React, Next.js 
                                        </Typography>
                                        <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                                            Database
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            SQL Server
                                        </Typography>
                                        <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                                            IDE
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            IntelliJ, Eclipse, XCode
                                        </Typography>
                                        <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                                            Other
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Git, Gradle, Maven, Apache Tomcat, EJB
                                        </Typography>
                                        
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
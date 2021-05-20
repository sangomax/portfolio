import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import styles from '/styles/ProjectContainer.module.css'
import { Typography, IconButton } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function ProjectContainer( { projectDta } ) {

    return (
        <div >
            <Card style={{ background: '#76C893', color: '#184E77', borderRadius: '25px', height: "100%"}} > 
                <CardHeader 
                    action={
                        <IconButton onClick={ () => window.open(projectDta.link) }>
                            <OpenInNewIcon />
                        </IconButton>
                    }
                    title={ projectDta.title }
                    subheader={ projectDta.subtitle }
                />
                <CardMedia style={{ paddingTop: '65%' }}
                    image={ projectDta.image }
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" className={styles.gridListInfo}>
                    { projectDta.body }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
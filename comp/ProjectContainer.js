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
            <Card className={ styles.card } > 
                <CardHeader 
                    action={
                        <IconButton onClick={ () => window.open(projectDta.link) } className={ styles.action } >
                            <OpenInNewIcon />
                        </IconButton>
                    }
                    title={ projectDta.title }
                    subheader= { <Typography className={ styles.subtitle } > { projectDta.subtitle } </Typography> }
                />
                <CardMedia className={ styles.image }
                    image={ projectDta.image }
                />
                <CardContent style={{height:'65px'}}>
                    <Typography variant="body2" color="textSecondary" className={styles.gridListInfo}>
                    { projectDta.body }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
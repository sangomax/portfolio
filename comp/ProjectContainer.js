import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from '/styles/ProjectContainer.module.css'
import { Typography } from '@material-ui/core';

export default function ProjectContainer( { data } ) {
    return (
        <div >
            <Card style={{ background: '#76C893', color: '#184E77', borderRadius: '25px'}} > 
                <CardHeader 
                    title="Project Name"
                    subheader="What is Project?"
                />
                <CardMedia style={{ paddingTop: '65%' }}
                    image="../logo_blue.png"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" className={styles.gridListInfo}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit etiam vehicula, mus curabitur enim in ultricies tempor leo fames iaculis orci, bibendum ultrices quisque cras vel libero tincidunt consequat.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    text: {
        textTransform: 'uppercase',
        color: '#FD4E1E',
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: 12,
            textAlign: 'center',
        },
    },
    title: {
        color: '#151F85',
        fontSize: 40,
        textAlign: 'left',
        width: 472,
        lineHeight: 1.2,
        fontWeight: 'bold',
        marginBottom: 20,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: 35,
        },
        [theme.breakpoints.down('sm')]: {
            width: 350
        },

        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            fontSize: 25
        },
    },
    about: {
        fontSize: 18,
        color: '#212121',
        opacity: 0.8,
        textAlign: 'left',
        width: 476,
        [theme.breakpoints.down('md')]: {
            fontSize: 14,
            textAlign: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },

        [theme.breakpoints.down('xs')]: {
            width: 'auto'
        },
    },

    res: {
        [theme.breakpoints.down('sm')]: {
            width: '350px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '250px'
        },
    }

}));


function TextProps(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.res}>
            <Typography className={classes.text}>{props.text}</Typography>
            <Typography className={classes.title}>{props.title}</Typography>
            <Typography className={classes.about}>{props.about}</Typography>
        </Grid>
    )
}


export default TextProps
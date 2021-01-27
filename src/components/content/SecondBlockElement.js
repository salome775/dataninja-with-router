import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: '70px 0px',
        height: '350px',
        [theme.breakpoints.down('md')]: {
            marginTop: '28px',
            height: '280px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '18px',
            flexDirection: 'column',
            height: 'auto',
            padding: '30px 0',
            alignItems: 'center'
        },

    },
    left: {
        width: '30%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            marginLeft: 0,
            marginTop: '20px'
        },

    },
    right: {
        marginLeft: '70px',
        width: '30%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: 'none'
        },
    },
    paragraph: {
        color: '#212121',
        opacity: 0.8,
        fontFamily: 'FiraGO',
        lineHeight: '1.2',
        fontSize: '1.2rem',
        textAlign: 'left',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    title: {
        fontFamily: 'FiraGO',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#151f85',
        opacity: 1,
        lineHeight: '1.11',
        textAlign: 'left',
        marginBottom: '30px',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: '8px'
        },
    },
    images: {
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            margin: 'auto',
            objectFit: 'contain'
        },
    },
    txt: {
        textAlign: 'left',
        fontSize: '14px',
        color: '#FD4E1E',
        fontFamily: 'FiraGO',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    }
}));


function TitleBlock() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={classes.left}>
                <Typography className={classes.txt}>ALL NETWORKS TOGETHER IN 1 REPORTING SYSTEM</Typography>
                <Typography className={classes.title}>Combined Real-Time Reporting</Typography>
                <Typography variant='body2' className={classes.paragraph}>   Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
                Simple CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder,
            we aim to give companies one, easy solution to build powerful marketing campaigns and make their digital advertising profitable.</Typography>
            </Grid>
            <Grid className={classes.right}>
                <img className={classes.images} alt='ninja' src={'/photos/image.svg'} />
            </Grid>
        </Grid>
    )
}


export default TitleBlock
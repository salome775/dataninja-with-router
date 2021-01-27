import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BlockComponent from './BlockComponent';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '100px auto',
        alignItems: 'center',
        // background: 'repeating-linear-gradient(180deg, transparent, 13%, #f9f5ef )',
        // paddingTop: '350px',
        // position: 'relative',
        // marginTop: '-350px',
        // [theme.breakpoints.down('md')]: {
        //     paddingTop: '200px',
        //     marginTop: '-200px'
        // },
        [theme.breakpoints.down('sm')]: {
            margin: '20px 0'
        },
    },
    primaryText: {
        fontFamily: 'FiraGO',
        fontSize: '4rem',
        fontWeight: 'bold',
        width: '100%',
        color: '#151F85',
        lineHeight: '1.11',
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
    secondary: {
        color: '#212121',
        fontFamily: 'FiraGO',
        opacity: 0.8,
        lineHeight: '1.86',
        width: '50%',
        margin: '20px auto',
        marginBottom: '50px',
        fontSize: '18px',
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('lg')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            textIndent: '0',
        },
    },
    block: {
        width: '80%',
        margin: 'auto',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    hiddenButton: {
        borderRadius: '24px',
        backgroundColor: '#ff4e00',
        textTransform: 'none',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'FiraGO',
        padding: '12px 20px',
        marginLeft: '20px',
        fontWeight: 'bold',
        maxHeight: '44px',
        margin: '20px 0',
        '&:hover': {
            background: '#ff4e00',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

function SecondaryTitle() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid>
                <Button className={classes.hiddenButton}>I want it! Contact Me</Button>
            </Grid>
            <Grid item >
                <Typography className={classes.primaryText}>online advertising tool</Typography>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={classes.secondary}>Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
                Simple CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder,
                we aim to give companies one, easy solution to build powerful marketing
                     campaigns and make their digital advertising profitable.</Typography>
            </Grid>
            <Grid className={classes.block} container item>
                <BlockComponent img={<img alt='palette' src={'/photos/palette.svg'} />} text='Perfect Design ' text2='Management, User Tracking' />
                <BlockComponent img={<img alt='palette' src={'/photos/man.svg'} />} text='Faster than ' text2='Any other product' />
                <BlockComponent img={<img alt='palette' src={'/photos/star.svg'} />} text='Simple Experience ' text2='of Product' />
            </Grid>
        </Grid>

    )
}


export default SecondaryTitle
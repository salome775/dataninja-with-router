import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f9f5ef',
        justifyContent: 'center',
        padding: '70px 0',
        [theme.breakpoints.down('sm')]: {
            padding: '30px 0'
        },
    },
    block: {
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '35%',
        alignItems: 'baseline',
        [theme.breakpoints.down('sm')]: {
            width: '86%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
        },
    },
    right: {
        display: 'flex',
        marginLeft: '60px',
        width: '40%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            marginLeft: '0',
            alignItems: 'center',
            justifyContent: 'center'
        },
    },
    paragraph: {
        width: '100%',
        color: '#212121',
        opacity: 0.9,
        fontFamily: 'FiraGO',
        lineHeight: '1.5',
        textAlign: 'left',
        fontSize: '1.2rem',
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.5rem',
            marginBottom: '20px'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '1rem',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '0.8rem'
        },
    },
    title: {
        fontFamily: 'FiraGO',
        fontWeight: 'bold',
        color: '#151f85',
        opacity: 1,
        lineHeight: '1.11',
        textAlign: 'left',
        fontSize: '3rem',
        [theme.breakpoints.up('xl')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            marginBottom: '12px',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '1.5rem'
        },
    },
    inputStyles: {
        fontFamily: 'FiraGO',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '4px 0px 0px 4px',
        width: '70%',
        padding: '18px 20px',
        maxHeight: '56px',
        boxShadow: '0 2px 11px 0 rgba(0, 0, 0, 0.1)',
        [theme.breakpoints.down('md')]: {
            width: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    button: {
        borderRadius: '0px 4px 4px 0px',
        backgroundColor: '#2C7DF0',
        textTransform: 'none',
        color: '#ffffff',
        opacity: 1,
        fontSize: '14px',
        fontFamily: 'FiraGO',
        padding: '18px 20px',
        maxHeight: '56px',
        '&:hover': {
            background: '#1D66CE',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '18px'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    inputStyle: {
        color: '#818181',
        '& ::placeholder': {
            fontFamily: 'FiraGO',
            opacity: 0.4,
            color: '#212121',
        },
        [theme.breakpoints.down('xxs')]: {
            '& ::placeholder': {
                fontSize: '12px'
            },
        },
    },
    dataninja: {
        backgroundColor: '#f9f5ef',
        background: 'linear-gradient(90deg, #FFFFFF 0%, #F9F5EF 100%)',
        maxWidth: '100%',
        height: 'auto',
    }
}));


function TitleBlock() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid container className={classes.block}>
                <Grid className={classes.left}>
                    <Typography className={classes.title}>Dataninja is the next generation online advertising tool</Typography>
                    <Typography variant='body2' className={classes.paragraph}>   Comprised of Ads Management, User Tracking, Powerful built-in optimization tool,
                    Simple CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder,
                     we aim to give companies one, easy solution to build powerful marketing campaigns and make their digital advertising profitable.</Typography>
                    <Grid container className={classes.container}>
                        <Grid item className={classes.inputStyles}>
                            <InputBase className={classes.inputStyle} label='test' placeholder='email@example.com' />
                        </Grid>
                        <Grid item >
                            <Button className={classes.button}>Contact Me</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.right}>
                    <img className={classes.dataninja} alt='dataninja' src={'/photos/dataninja.png'} />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default TitleBlock
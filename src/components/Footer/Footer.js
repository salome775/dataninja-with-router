import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
    footer: {
        background: "#151a22",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 35,
        paddingTop: 90,
        // marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            paddingTop: '16px'
        },
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        color: "#ffffff",
        fontSize: 14,
        lineHeight: 2.29,
        opacity: 0.6
    },
    h1: {
        fontSize: 54,
        color: "#ffffff",
        lineHeight: 1.11,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: '36px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        },
    },
    button: {
        fontFamily: 'FiraGO',
        background: '#FD4E1E',
        color: "#ffffff",
        borderRadius: 4,
        fontSize: 14,
        textTransform: 'none',
        lineHeight: 2.29,
        fontWeight: 800,
        width: 158,
        height: 44,
        marginTop: 20,
        '&:hover': {
            background: '#FD4E1E',
        }
    },
    nested_grid: {
        width: '100%',
        borderTop: "1px solid #2e3641",
        display: 'flex',
        color: '#ffffff',
        fontSize: 14,
        marginTop: 90,
        padding: '50px 130px 10px 130px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 30px 0 30px ',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '30px',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '20px 0 0 0',
            textAlign: 'center',
        },
    },
    link: {
        fontSize: 14,
        lineHeight: 2.29,
        color: '#ffffff',
        opacity: 0.8,
        marginRight: 30,
        [theme.breakpoints.down('sm')]: {
            marginRight: '30px'
        },
        [theme.breakpoints.down('xs')]: {
            fontWeight: 'normal',
            textAlign: 'center',
            margin: '0'
        },

    },
    _container: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '20px'
        },
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            justifyContent: 'center',
            '& div:nth-child(2)': {
                marginLeft: '10px',
                marginRight: '10px'
            }
        },
    },
    // icons: {
    //     marginRight: '15px',
    //     [theme.breakpoints.down('xs')]: {
    //         margin: '0',
    //         '& :nth-child(2)': {
    //             marginLeft: '10px'
    //         }
    //     },
    // },
    copyright: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: '20px',
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
    mainColor: {
        color: '#FD4E1E',
        paddingRight: 5
    },
    icon: {
        background: 'red',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        marginLeft: 10,
        backgroundColor: 'rgba(46,50,59)',

    }

}));
function Footer() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.footer}>
            <Typography className={classes.info}>
                That’s not all:
            </Typography>

            <Typography variant="h1" className={classes.h1}>
                Be amazed by our product?
            </Typography>

            <Button className={classes.button} variant="filled" color="primary">
                Try Beta For Free
                    </Button>

            {/* <Grid item className={classes.grid}> */}
            <Grid item className={classes.nested_grid}>
                <Grid item className={classes.copyright}>
                    <Typography className={classes.mainColor}>Dataninja </Typography> © 2019-20
                        </Grid>
                <Grid item className={classes._container}>
                    <Link href="#" className={classes.link}>Product Story</Link>
                    <Link href="#" className={classes.link}>About</Link>
                    <Link href="#" className={classes.link} >Contact</Link>
                </Grid>
                <Grid item className={classes.icons}>
                    <Grid className={classes.icon}>
                        <FacebookIcon style={{ fontSize: 20 }} />
                    </Grid>
                    <Grid className={classes.icon}>
                        <TwitterIcon style={{ fontSize: 20 }} />
                    </Grid>
                    <Grid className={classes.icon}>
                        <InstagramIcon style={{ fontSize: 20 }} />
                    </Grid>
                </Grid>
            </Grid>
            {/* </Grid> */}
        </Box>
    );
}


export default Footer
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    box: {
        width: 140,
        height: 110,
        border: '2px solid #151F85',
        borderRadius: 4,
        textAlign: 'left',
        padding: '14px 0px 0px 12px',
        margin: '0px 9px 12px 0px',
        color: '#151A22',
        [theme.breakpoints.down('md')]: {
            margin: '0px 3px 12px 0px',
            width: 130,
            height: 105,
        },
    },
    box_active: {
        width: 140,
        height: 110,
        border: '2px solid #151F85',
        borderRadius: 4,
        textAlign: 'left',
        padding: '14px 0px 0px 12px',
        margin: '0px 9px 12px 0px',
        background: '#151F85',
        color: '#ffffff',
        [theme.breakpoints.down('md')]: {
            margin: '0px 3px 12px 0px',
            width: 130,
            height: 105,
        },
    },
    boxTitle: {
        fontSize: 14,
        width: 105,
        lineHeight: 1.2,
        fontWeight: 700
    },
    number: {
        padding: '1px 1px 1px 1px',
        background: '#FD4E1E',
        width: 28,
        height: 25,
        borderRadius: 1,
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 12
    }
}));


function BoxContainer(props) {
    const classes = useStyles();
    return (
        <Grid container>
            {props.active === 'active' ?
            <Grid className={classes.box_active}>
                <Typography className={classes.boxTitle}>
                    {props.summary}
                </Typography>
                <Typography className={classes.number}>
                    {props.number}
                </Typography>
            </Grid>:
            <Grid className={classes.box}>
                <Typography className={classes.boxTitle}>
                    {props.summary}
                </Typography>
                <Typography className={classes.number}>
                    {props.number}
                </Typography>
            </Grid>
            }
        </Grid>
    )
}


export default BoxContainer
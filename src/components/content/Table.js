import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from "@material-ui/core/styles";





const useStyles = makeStyles((theme) => ({
    header: {
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 700,
        textAlign: 'left',
        width: '168px',
        paddingLeft: 5,
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    header_child: {
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 700,
        textAlign: 'center',
        width: '80px',
        marginRight: 10,
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    box: {
        borderRadius: 6,
        background: '#FD4E1E',
        color: '#ffffff',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 600,
        width: '150px',
        margin: '2px 20px 2px 0px',
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    box_child: {
        borderRadius: 6,
        background: 'rgba(237,237,247)',
        color: '#000000',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 600,
        width: '150px',
        margin: '2px 20px 2px 0px',
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    spent: {
        borderRadius: 6,
        background: '#ED1133',
        color: '#ffffff',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 700,
        margin: '3px 8px 2px 0px',
        width: 80,
        border: '1px solid #ED1133',
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    spent_child: {
        borderRadius: 6,
        border: '1px solid #ED1133',
        color: '#000000',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 700,
        margin: '0px 9px 0px 0px',
        width: 80,
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    revenue: {
        borderRadius: 6,
        background: '#2C7DF0',
        color: '#ffffff',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 700,
        margin: '3px 10px 2px 0px',
        width: 80,
        border: '1px solid #2C7DF0',
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    revenue_child: {
        borderRadius: 6,
        border: '1px solid #2C7DF0',
        color: '#2C7DF0',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 700,
        margin: '0px 10px 0px 0px',
        width: 80,
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    profit: {
        background: '#49AC5F',
        borderRadius: 6,
        color: '#ffffff',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 700,
        margin: '3px 8px 2px 0px',
        width: 80,
        border: '1px solid #49AC5F',
        [theme.breakpoints.down('sm')]: {
            width: 60
        },
    },
    profit_child: {
        border: '1px solid #49AC5F',
        borderRadius: 6,
        color: '#000000',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 700,
        margin: '1px 0px 2px 0px',
        width: 80,
        [theme.breakpoints.down('sm')]: {
            width: 60
        },

    },
    fc_icon: {
        fontSize: 18,
        marginLeft: 30,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    img: {
        marginLeft: 30,
        width: 18,
        height: 18,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    dropUp: {
        position: 'relative',
        bottom: 8,
        fontSize: '1.2rem'
    },
    dropDown: {
        position: 'relative',
        right: 20,
        bottom: 1,
    },
    icon: {
        width: '20px'
    },

}));


function TableAnalytics() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid container>
                <Grid container className={classes.header}>ad name
                <Grid className={classes.dropUp}><ArrowDropUpIcon className={classes.icon} /></Grid>
                    <Grid className={classes.dropDown}><ArrowDropDownIcon className={classes.icon} /></Grid>
                </Grid>
                <Grid className={classes.header_child}>spent</Grid>
                <Grid className={classes.header_child}>revenue</Grid>
                <Grid className={classes.header_child}>profit</Grid>
            </Grid>

            <Grid container>
                <Grid item className={classes.box}>Advert #807
                <FacebookIcon className={classes.fc_icon} />
                </Grid>
                <Grid item >
                    <Grid className={classes.spent}>2,000$</Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.revenue}>4,000$</Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.profit}>2,000$</Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item className={classes.box_child}>
                    Advert #980
                <img src="\img\Image 8@3x.png" className={classes.img} />
                </Grid>
                <Grid item >
                    <Grid className={classes.spent_child}> 1.800$</Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.revenue_child}>6,700$</Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.profit_child}>4,900$</Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item className={classes.box_child}>
                    Advert #1204
                <FacebookIcon className={classes.fc_icon} />
                </Grid>
                <Grid item >
                    <Grid className={classes.spent_child}>3,500$</Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.revenue_child}> 4,600$</Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.spent_child} style={{ color: '#ED1133' }}>-1,100$</Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TableAnalytics
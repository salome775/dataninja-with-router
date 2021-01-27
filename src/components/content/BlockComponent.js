import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0px 20px 40px #80250C0D',
        height: '10rem',
        padding: '50px 0px',
        borderRadius: '8px',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '30%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            marginBottom: '20px',
            padding: '30px 0'
        },
    },
    div: {
        width: '56px',
        height: '56px',
        borderRadius: '20px',
        backgroundColor: 'rgb(255,0,0, 0.1)',
        display: 'flex',
        fontSize: '14px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },

    },
    text: {
        fontFamily: 'FiraGO',
        fontSize: '18px',
        lineHeight: '1.5',
        fontWeight: 'bold',
        color: '#151A22',
        opacity: 1,
        textAlign: 'center',
        marginTop: '10px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '12px',
            fontSize: '14px'
        },
    }
}));

function BlockComponent(props) {
    const text = props.text;
    const text2 = props.text2;
    const img = props.img;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.div}>
                {img}
            </div>
            <Typography className={classes.text}>{text}<br className={classes.break} />{text2}</Typography>
        </div>
    )
}


export default BlockComponent
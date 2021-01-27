import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    container: {
        background: '#ffffff',
        boxShadow: '0px 1px 3px #0000001A',
        borderRadius: 6,
        padding: '32px 20px 32px 20px',
        width: '495px',
        margin: '0px 0px 0px 20px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '70px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0px 0px 40px 0px',
            padding: '25px 10px 25px 10px',
            width: '450px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '200px',
            padding: '10px 0px 0px 30px'
        },
    },
    container2: {
        background: '#ffffff',
        boxShadow: '0px 1px 3px #0000001A',
        borderRadius: 6,
        padding: '30px 0px 30px 30px',
        width: '495px',
        margin: '0px 0px 0px 110px',
        [theme.breakpoints.down('md')]: {
            margin: '50px 0px 0px 0px',
            width: '450px',
        },
        [theme.breakpoints.down('sm')]: {
            width: 300
        },
    },
    container_child: {
        fontFamily: 'FiraGO',
        textAlign: 'right',
        paddingLeft: 30,
        paddingRight: 35,
        marginLeft: 50,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 0,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 0,
        },
    },
    flex: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            margin: 0
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    title: {
        fontFamily: 'FiraGO',
        textAlign: 'left',
        fontSize: 18,
        padding: '0px 0px 20px 0px',
    },
    section: {
        minHeight: 570,
        width: '100%',
        background: '#F9F5EF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '18px',
            flexDirection: 'column',
            height: 'auto',
            padding: '30px 0',
            alignItems: 'center'
        },
    },
    box: {
        border: '1px dotted rgba(205,205,205)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        margin: '25px 0px 25px 0px',
        padding: 15
    },
    icon: {
        borderRadius: '50%',
        background: 'rgba(248,219,211)',
        color: '#FD4E1E',
        fontSize: 15,
        padding: 5
    },
    txt: {
        fontSize: 12,
        textAlign: 'left',
        paddingLeft: 10,
        fontFamily: 'FiraGO',
    },
    link: {
        fontSize: 14,
        textDecoration: 'underline',
        color: '#151F85',
        fontWeight: 500
    },
    button: {
        textTransform: 'none',
        background: '#FD4E1E',
        color: '#ffffff',
        fontSize: 12,
        width: 95,
        height: 40,
    },

}));
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '60px',
      alignItems: 'flex-start',
      [theme.breakpoints.down('md')]: {
        marginRight: '30px',
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: '40px',
        marginRight: '20px',
      },
    },
    primaryText: {
      fontSize: '16px',
      fontWeight: '800',
      fontFamily: 'FiraGO',
      padding: 0,
      margin: 0,
      marginBottom: '6px',
      color: '#000000',
      cursor: 'pointer',
      textDecoration: 'none',
      [theme.breakpoints.down('xl')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '16px',
      },
    },
    secondary: {
      fontSize: '12px',
      fontFamily: 'FiraGO',
      color: '#000000',
      opacity: 0.6,
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      textDecoration: 'none',
      [theme.breakpoints.down('xl')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '14px',
      },
    },
  };
});

function HeaderList(props) {
  const classes = useStyles();
  const text = props.text;
  const href = props.href;
  const secondary = props.secondary;
  const secondary_href = props.secondary_href;
  return (
    <Grid item className={classes.root}>
      <Link
        to={href}
        style={{ color: props.color, secondcolor: props.color }}
        className={classes.primaryText}
      >
        {text}
      </Link>
      <Link
        to={secondary_href}
        style={{ color: props.secondcolor, fontWeight: props.fontWeight }}
        className={classes.secondary}
      >
        {secondary}
      </Link>
    </Grid>
  );
}

export default HeaderList;

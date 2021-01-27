import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeaderList from './HeaderList';
import Button from '@material-ui/core/Button';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuFunction from './Menu';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MobileHeader from './mobile/MobileHeader';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      [theme.breakpoints.down('md')]: {
        padding: 20,
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
        padding: '8px',
        margin: '0',
      },
    },

    logo: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: '900',
      fontFamily: 'FiraGO',
      marginRight: '30px',
      [theme.breakpoints.down('sm')]: {
        padding: '0',
        margin: '0',
        marginLeft: '40px',
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '20px',
        marginRight: '50px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        marginRight: '20px',
      },
    },
    paragraph: {
      margin: 0,
      padding: 0,
      paddingRight: '30px',
      cursor: 'default',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    hat: {
      marginTop: '2px',
    },
    primary: {
      fontSize: '14px',
      fontWeight: '800',
      fontFamily: 'FiraGO',
      padding: 0,
      margin: 0,
      color: '#959595',
      cursor: 'pointer',
    },
    secondary: {
      fontSize: '10px',
      fontFamily: 'FiraGO',
      padding: 0,
      margin: 0,
      color: '#000000',
      fontWeight: '800',
      cursor: 'pointer',
    },
    button: {
      textTransform: 'none',
      fontFamily: 'FiraGO',
      borderRadius: '6px',
      backgroundColor: '#ff4e00',
      color: '#ffffff',
      fontSize: '16px',
      padding: '12px 24px',
      // fontWeight: 'bold',
      '&:hover': {
        background: '#ff4e00',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '12px',
        padding: '8px 12px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        padding: '12px 20px',
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '16px',
      },
    },
    language: {
      height: '100%',
      fontFamily: 'FiraGO',
      borderRadius: '4px',
      border: '1px solid #bababa',
      marginLeft: 20,
      minWidth: '20px',
      height: '50px',
      [theme.breakpoints.down('lg')]: {
        height: '40px',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    txt: {
      fontWeight: 'bold',
      color: '#151A22',
      fontSize: '14px',
      padding: '8px',
      lineHeight: 0.8,
      fontFamily: 'FiraGO',
    },
    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft: '10px',
      [theme.breakpoints.down('md')]: {
        marginRight: '30px',
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '16px',
        display: 'none',
      },
    },
    menu: {
      backgroundColor: '#ff4e00',
      color: '#ffffff',
      borderRadius: '50%',
      minWidth: '26px',
      marginLeft: '4px',
      padding: '10px',
      '&:hover': {
        background: '#ff4e00',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '20px',
      },
    },
    displayNone: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    orange: {
      backgroundColor: '#ff4e00',
    },
    white: {
      backgroundColor: '#ffffff !important',
      color: '#000000 !important',
    },
  };
});

function Header() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Grid container className={`${classes.container} ${menuOpen ? classes.orange : ''}`}>
      <Grid item className={classes.logo}>
        <img style={{ marginRight: '10px' }} alt='ninja' src={'/photos/dataninja.svg'} />
        <p className={classes.paragraph}>DataNinja</p>
      </Grid>
      <Grid className={classes.displayNone}>
        <Grid item>
          <HeaderList href='/home' text='Home' secondary='Learn More' />
        </Grid>
        <Grid item>
          <HeaderList text='Product Story' secondary='Timeline' />
        </Grid>
        <Grid item>
          <HeaderList href='/about' text='About us' secondary='Team' />
        </Grid>
        <Grid item>
          <HeaderList
            href='/login'
            secondary_href='/register'
            text='Login'
            secondary='Or Register'
          />
        </Grid>
      </Grid>
      <Grid className={classes.listItem} item>
        <img className={classes.hat} alt='graduation-hat' src={'/photos/hat.svg'} />
        <div className={classes.div}>
          <Grid item>
            <HeaderList text='Dataninja Academy' secondary='Soon' />
          </Grid>
        </div>
      </Grid>
      <Grid item>
        <MobileHeader />
      </Grid>
      <Grid>
        {/* <Button className={classes.button}>Try Beta for Free</Button> */}
        <Button className={classes.language}>
          <Typography className={classes.txt}>
            EN <br /> ...{' '}
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={`${classes.menu} ${menuOpen ? classes.white : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuRoundedIcon />}
        </Button>
      </Grid>
      <MenuFunction open={menuOpen} onClose={() => setMenuOpen(false)} />
    </Grid>
  );
}

export default Header;

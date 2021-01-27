import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FacebookIcon from '@material-ui/icons/Facebook';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';

import IconButton from "@material-ui/core/IconButton";

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5px 5px 5px 15px'
    },
    red: {
        color: 'red'
    }, 
    filled:{
        minWidth: '70%',
        height: 50,
        boxSizing: "border-box",
        margin: '10px 50px 0px 0px'
    },
    label: {
        color: '#7c899d',
        fontSize: 16,
        lineHeight: 1,
        marginTop: 3
    },
    
    line: {
        '&.fieldset':{
            border:'none'
        },
        '&.MuiInput-underline:after':{
            border:'none',
        },
    },
    option: {
        fontSize: 12,
        fontWeight: 'bold',
        '&.MuiInput-underline:before': {
            padding: 0,
            border: 'none'
        },
        
    },
    iconContainer: {
        background: '#ffffff',
        borderRadius: 6,
        marginLeft: 'auto',
        height: 40,
        padding: '6px 10px 14px 10px'
    },
    fc_icon: {
        fontSize: 25,
        color: '#4267B2',
    },
    priority: {
        fontSize: 14,
        color: '#ffffff',
        
    },
    iconButton: {
        background: 'rgba(36,118,243)',
        width: 30,
        height: 30,
        margin: '0px 2px 1px 13px'
    },
    img: {
        width: 18,
        height: 18
    },
    
    inputContainer: {
        width: '100%',
        background: 'rgba(244,244,244)',
        borderRadius: 6
    }

  }));

function ContentBottom() {
    const classes = useStyles();
    
    const [state, setState] = React.useState({
        choose: '',
        name: '',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    return (
        <Grid className={classes.inputContainer}>
        <Grid container className={classes.container}>
            <Grid item xs={5}>
                <FormControl  className={classes.filled}>
                    <InputLabel className={classes.label} shrink htmlFor="choose-native-label-placeholder">
                            <span>Choose Objective
                                <span className={classes.red}>*</span>
                                </span>
                        </InputLabel>
                        <NativeSelect
                            className={classes.option}
                            value={state.choose}
                            onChange={handleChange}
                            inputProps={{
                                name: 'choose',
                                id: 'choose-native-label-placeholder',
                            }}
                            >
                            <option value="">Website Traffic</option>
                        </NativeSelect>
                </FormControl>
            </Grid>
            <Grid className={classes.iconContainer}>
                <IconButton >
                    <FacebookIcon className={classes.fc_icon}/>
                </IconButton>
                <IconButton >
                    <img src="\img\Image 8@3x.png" className={classes.img}/>
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <PriorityHighRoundedIcon className={classes.priority}/>
                </IconButton>
            </Grid>
        </Grid>
        </Grid>
       
    )
}


export default ContentBottom
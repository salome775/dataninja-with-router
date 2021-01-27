import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextProps from './TextProps';
import BoxContainer from './BoxContainer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Input from './Input';
import TableAnalytics from './Table';
import { useStyles } from './JSS';


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
    <Grid>
      <Grid className={classes.section}>
        <Grid className={classes.container}>
          <Typography className={classes.title}>Choose Audience</Typography>
          <Grid className={classes.flex}>
            <BoxContainer
              active="notActive"
              summary='People Who Bought in Last 90 Days'
              number='01'
            />
            <BoxContainer
              active='notActive'
              summary='Similar People to Our Customers'
              number='02'
            />
            <BoxContainer
              active="active"
              summary='Similar People who visited my website'
              number='03'
            />
          </Grid>
          <Grid item xs={10} style={{ textAlign: 'right' }}>
            <PeopleAltIcon style={{ color: '#151F85', fontSize: 35 }} />
          </Grid>
        </Grid>
        <Grid className={classes.container_child}>
          <TextProps
            text='Auto Retargeting in All Networks'
            title='Built-In Automatic Audiences and Segmentation'
            about='Comprised of Ads Management, User Tracking,
                                    Powerful built-in optimization tool, Simple CRM,
                                    Real-Time Reporting system, Website Builder and
                                    Communication/Funnel Builder, we aim to give 
                                    companies one, easy solution to build powerful 
                                    marketing campaigns and make their digital 
                                    advertising profitable.'
          />
        </Grid>
      </Grid>

      <Grid className={classes.section} style={{ background: '#ffffff' }}>
        <Grid className={classes.container_child}>
          <TextProps
            text='Real-Time Data in All Networks'
            title='Powerful Analytics, Exact Profit, For Each advertisement in Real-Time'
            about='Comprised of Ads Management, User Tracking, Powerful built-in 
                                        optimization tool, Simple CRM, Real-Time Reporting system, Website Builder 
                                        and Communication/Funnel Builder, we aim to give companies one, easy solution 
                                        to build powerful marketing campaigns and make their digital advertising profitable.'
          />
        </Grid>
        <Grid>
          <Grid className={classes.container2}>
            <TableAnalytics />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.section}>
        <Grid className={classes.flex}>
          <Grid className={classes.container}>
            <Grid container>
              <Input />
              <Grid className={classes.box}>
                <NotificationsIcon className={classes.icon} />
                <Typography className={classes.txt}>
                  DataNinja: Highly Recommends to choose Conversion Objective and create 2 separate
                  campaigns for Display and Search
                </Typography>
              </Grid>
              <Grid container>
                <Grid>
                  <Link className={classes.link}>Learn Digital Marketing</Link>
                </Grid>
                <Grid style={{ marginLeft: 'auto' }}>
                  <Button className={classes.button}>Get help</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.container_child}>
          <TextProps
            text='The Most Optimized Advertisements'
            title='Recommendations and Suggestions from Agency, which spends $1M. Yearly on Digital Ads'
            about='Comprised of Ads Management, User Tracking, Powerful 
                                    built-in optimization tool, Simple CRM, Real-Time Reporting 
                                    system, Website Builder and Communication/Funnel Builder, we 
                                    aim to give companies one, easy solution to build powerful marketing 
                                    campaigns and make their digital advertising profitable.'
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContentBottom;

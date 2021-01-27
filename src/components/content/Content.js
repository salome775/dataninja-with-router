import React from 'react';
import TitleBlock from './TitleBlock';
import SecondaryTitle from './SecondaryTitle';
import BlockElement from './BlockElement';
import SecondBlockElement from './SecondBlockElement';
import { makeStyles } from '@material-ui/core/styles';
import ContentBottom from './ContentBottom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
});

function Content() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TitleBlock />
            <SecondaryTitle />
            <BlockElement />
            <SecondBlockElement />
            <ContentBottom />
        </div>
    )
}


export default Content
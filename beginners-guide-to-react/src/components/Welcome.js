import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }
));

export default function Welcome() {
    const classes = useStyles();

    function FormRow() {
        return (
            <>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </>
        )
    }

    return (
        <div className={classes.root}>
            <div align='center'>
                Welcome to The Beginners Guide to React!
            </div>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
            </Grid>
        </div>
    )
}
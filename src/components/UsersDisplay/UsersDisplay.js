import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UsersDisplay = (props) => {
    const { displayData } = props
    console.log("IN user display props=")
    console.dir(displayData)
    console.log("displayData items=")
    displayData ? console.dir(displayData.response.items) : console.log("Nothing yet")
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            margin: 50
        },
        media: {
            height: 140,
        },
    });
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3}>
                {displayData ? displayData.response.items.map(data => {
                    return <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={data.avatar_url}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.login}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Github Link: <a href={data.html_url}>Click Here</a>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                }) : <p>Loading...</p>}
            </Grid>
        </>
    );
};

export default UsersDisplay;
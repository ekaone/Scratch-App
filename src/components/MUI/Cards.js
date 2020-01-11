import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function MediaCard() {

  const Share = () => (
    <>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random/400x200"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Share
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </>
  )

  const More = () => (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          More
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          More are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </>
  )

  const classes = useStyles();
  const [component, setComponent] = useState(<Share />)

  const handleClick = (c) => {
    switch (c) {
      case 'Share':
        console.log('Share')
        setComponent(<Share />)
        break;
      case 'More':
        console.log('More')
        setComponent(<More />)  
        break;
    }
  }


  return (
    <Card className={classes.card}>
      {component}  
      <CardActions>
        <Button onClick={() => handleClick('Share')} size="small" color="primary">
          Share
        </Button>
        <Button onClick={() => handleClick('More')} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

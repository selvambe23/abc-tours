import React from 'react';
import _get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function HotelCard(props) {
  const classes = useStyles();
  const { hotelId, img, name, desc, rooms={}} = _get(props, 'hotelData', {});
  return (
    <Card className={classes.card} key={hotelId}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={require(`../../assests/images/${img}.jpeg`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.alignLeft}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Toal Rooms {rooms.length}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
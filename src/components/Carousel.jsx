import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  cardContent: {
    flexGrow: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 2,
  },
  cardImage: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  button: {
    marginTop: 'auto',
  },
});

function Carousel() {
  const classes = useStyles();

  return (
    <Swiper>
      <SwiperSlide>
        <Card className={classes.card}>
          <img
            className={classes.cardImage}
            src="https://picsum.photos/id/1002/800/400"
            alt="slide 1"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              Welcome to Swiper and Material UI
            </Typography>
            <Typography variant="body2" component="p">
              This is a demo of how to use Swiper and Material UI together.
            </Typography>
          </CardContent>
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<ArrowForward />}>
            Learn More
          </Button>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className={classes.card}>
          <img
            className={classes.cardImage}
            src="https://picsum.photos/id/1015/800/400"
            alt="slide 2"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              Slide 2
            </Typography>
            <Typography variant="body2" component="p">
              This is the second slide.
            </Typography>
          </CardContent>
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<ArrowForward />}>
            Learn More
          </Button>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className={classes.card}>
          <img
            className={classes.cardImage}
            src="https://picsum.photos/id/1024/800/400"
            alt="slide 3"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              Slide 3
            </Typography>
            <Typography variant="body2" component="p">
              This is the third slide.
            </Typography>
          </CardContent>
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<ArrowForward />}>
            Learn More
          </Button>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;

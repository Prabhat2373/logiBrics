import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  const view = ()=>{
   window.location.href = `/blog/${props.link}`
  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={view} key={props.key}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" href={`/blog/${props.link}`}>View</Button>
      </CardActions>
    </Card>
  );
}
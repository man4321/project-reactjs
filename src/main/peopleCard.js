import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  
});

export default function PeopleCard(props) {
  const classes = useStyles();
  const {item} = props;

  return (
    <Card>
      <CardContent className="list-item">
          <div>
              <img src={item.picture.thumbnail}/>
          </div>
          <div>{item.name.title} {item.name.first} {item.name.last}</div>
          <div>{item.email}</div>
          <div>{item.location.city}</div>
          <div>{item.location.state}</div>
        </CardContent>
    </Card>
  );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Input } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function InputCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container><Card >
      <CardHeader

        title="Enter a number"
        subheader="Calculates the square, cube and Fibonacci value"
      />

      <CardContent>
        <Input size='medium' 
                fullWidth
                type='number'
                value={props.value} 
                onChange={(e) => props.onChange(e.target.value)}></Input>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{color:`${props.isFavorite ? 'red':''}`}}>
          <FavoriteIcon onClick={() => props.onFavouriteClick(props.value)}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><b>Square of number</b></Typography>
          <Typography paragraph>
            Square of a number is the number which is obtained by multiplying the number by itself. If N is a number, then the square of it is N × N = N2. For example, the square of 2 is 22 = 2 × 2 = 4.
          </Typography>
          <Typography paragraph>
            <b>Cube of number</b>
          </Typography>
          <Typography paragraph>
            A cube number is the result when a number has been multiplied by itself twice. The symbol for cubed is 3. For example, 8 is a cube number because it's 2 x 2 x 2 (2 multiplied by itself twice); this is also written as 23 (“two cubed”). Another example of a cube number is 27 because it's 33 (3 x 3 x 3, or “three cubed”).
          </Typography>
          <Typography paragraph>
            <b>Fibonacci</b>
          </Typography>
          <Typography paragraph>
            The Fibonacci sequence begins with the following 14 integers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ... Each number, starting with the third, adheres to the prescribed formula. For example, the seventh number, 8, is preceded by 3 and 5, which add up to 8.
          </Typography>
        </CardContent>
      </Collapse>
    </Card></Container>
  );
}
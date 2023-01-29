import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"

const ResultDisplayCard = (props) => {
  return <Container><Card id={`${props.id}-card`}>
    <CardHeader 
      id={`${props.id}-card-title`}
      title={props.title}
      subheader={props.subTitle}
    />

    <CardContent id={`${props.id}-card-content`}><Typography>
      <h1 id={`${props.id}-value`}>{props.displayText}</h1>
    </Typography></CardContent></Card></Container>
}

export default ResultDisplayCard
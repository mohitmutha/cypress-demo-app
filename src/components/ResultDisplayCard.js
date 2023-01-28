import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"

const ResultDisplayCard = (props) => {
  return <Container><Card >
    <CardHeader
      title={props.title}
      subheader={props.subTitle}
    />

    <CardContent><Typography>
      <h1>{props.displayText}</h1>
    </Typography></CardContent></Card></Container>
}

export default ResultDisplayCard
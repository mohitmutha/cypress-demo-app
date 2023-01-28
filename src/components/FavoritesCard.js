import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"

const FavoritesCard = (props) => {
  return <Container><Card >
    <CardHeader
      title={"Favorites"}
    />

    <CardContent><div style={{display:'grid', gridTemplateColumns:'repeat(10,1fr)'}}>
      {props.values?.map(val => {
        return <div onClick={() => props.onSelect(val)}
        style={{border:'1px solid green', 
                backgroundColor:`${val=== props.select ? 'blue':'transparent'}`,
                cursor: 'pointer', 
                textAlign:'center', 
                margin: 5}}><h3 styles={{margin:10, border:'1px solid grey'}}>{val}</h3></div>
      })}
      
    </div></CardContent></Card></Container>
}

export default FavoritesCard
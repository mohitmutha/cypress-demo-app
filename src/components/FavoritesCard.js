import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"

const FavoritesCard = (props) => {
  return <Container><Card >
    <CardHeader id="favorites-card-title"
      title={"Favorites"}
    />

    <CardContent id="favorites-content"><div style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)' }}>
      {(!props.values || props.values.length === 0 || !Array.isArray(props.values)) && <h1 id="favorites-card-message">No favorites added</h1>}
      {Array.isArray(props.values) && props.values?.map((val, idx) => {
        return <div id={`favorites-tile-${idx}`} onClick={() => props.onSelect(val)}
          style={{
            border: '1px solid green',
            backgroundColor: `${val === props.select ? 'blue' : 'transparent'}`,
            cursor: 'pointer',
            textAlign: 'center',
            margin: 5
          }}><h3 id={`favorites-tile-text-${idx}`} styles={{ margin: 10, border: '1px solid grey' }}>{val}</h3></div>
      })}

    </div></CardContent></Card></Container>
}

export default FavoritesCard
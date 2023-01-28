import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ResultDisplayCard from "./ResultDisplayCard"

const CubeCard = (props) => {
  const [result, setResult] = useState()
  useEffect(() => setResult(Math.pow(props.value, 3)),[props.value])
  return <ResultDisplayCard title="Cube" displayText={result}/>
}

export default CubeCard
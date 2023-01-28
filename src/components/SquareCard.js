import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ResultDisplayCard from "./ResultDisplayCard"

const SquareCard = (props) => {
  const [result, setResult] = useState()
  useEffect(() => setResult(Math.pow(props.value, 2)),[props.value])
  return <ResultDisplayCard title="Square" displayText={result}/>
}

export default SquareCard
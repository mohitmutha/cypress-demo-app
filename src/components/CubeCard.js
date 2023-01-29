import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ResultDisplayCard from "./ResultDisplayCard"

const CubeCard = (props) => {
  const [result, setResult] = useState()
  useEffect(() => {
    if (isNaN(props.value)) {
      setResult("Error - Non numeric value")
    } else {
      setResult(Math.pow(props.value * 1000000, 3) / Math.pow(1000000,3)) //Compensates for bug in JS uoto 6 decimal places
    }

  }, [props.value])
  
  return <ResultDisplayCard id="cube-result" title="Cube" displayText={result}/>
}

export default CubeCard
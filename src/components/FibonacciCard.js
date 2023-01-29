import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ResultDisplayCard from "./ResultDisplayCard"

const FibonacciCard = (props) => {
  const [result, setResult] = useState()
  useEffect(() => {
    const roundedVal = Math.round(props.value)
    if(isNaN(props.value) || roundedVal < 1) {
      setResult("Error - Input should be number greater than 0")
    } else {
      for (var fibonacci = [0, 1], i = 2; i < props.value; i++)
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])

      setResult(fibonacci[props.value - 1])
    }

  }


    , [props.value])
  return <ResultDisplayCard id="fibonacci-result" title="Fibonacci Number" displayText={result} />
}

export default FibonacciCard
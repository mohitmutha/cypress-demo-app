import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ResultDisplayCard from "./ResultDisplayCard"

const FibonacciCard = (props) => {
  const [result, setResult] = useState()
  useEffect(() => {
    let currentVal = 0;
    let lastVal = 1;
    let iters = 0;
    for (var fibonacci = [0, 1], i = 2; i < props.value; i++)
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])

      setResult(fibonacci[props.value - 1])
  }
    
    
  , [props.value])
return <ResultDisplayCard title="Fibonacci Number" displayText={result} />
}

export default FibonacciCard
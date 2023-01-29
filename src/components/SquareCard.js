import { useEffect, useState } from "react"
import ResultDisplayCard from "./ResultDisplayCard"

const SquareCard = (props) => {
  const [result, setResult] = useState()
  useEffect(() => {
    if (isNaN(props.value)) {
      setResult("Error - Non numeric value")
    } else {
      setResult(Math.pow(props.value, 2))
    }

  }, [props.value])
  return <ResultDisplayCard id='square-result' title="Square" displayText={result} />
}

export default SquareCard
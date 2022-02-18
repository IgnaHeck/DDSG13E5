import { Spinner } from "@chakra-ui/react"

export default function spinner({text}) {
    return (
      <div>
        <Spinner/>
        <span>{text}</span>
      </div>
    )
}
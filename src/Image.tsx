import { useState } from "react"
import Box from "@mui/material/Box"
import ErrorDisplay from "./ErrorDisplay"
import LoadingDisplay from "./LoadingDisplay"
import StyledImage from "./StyledImage"

type ImageProperties = {
  src: string
  alt?: string
  height?: string
  width?: string
  fit?: string
  duration?: number
  easing?: string
}

const baseStyles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
}

const Image = ({
  src,
  alt,
  height = "100%",
  width = "100%",
  fit = "contain",
  easing = "cubic-bezier(0.7, 0, 0.6, 1)",
  duration = 3000,
}: ImageProperties) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  return (
    <>
      <StyledImage
        src={src}
        alt={alt}
        fit={fit}
        duration={duration}
        easing={easing}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
      />
      {loading ? <LoadingDisplay /> : null}
      {error ? <ErrorDisplay /> : null}
    </>
  )
}

export default Image

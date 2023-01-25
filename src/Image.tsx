import { useState } from "react"
import ErrorDisplay from "./ErrorDisplay"
import LoadingDisplay from "./LoadingDisplay"
import StyledImage from "./StyledImage"
import useImageLoading from "./useImageLoading"

type ImageProperties = {
  src: string
  alt?: string
  height?: string
  width?: string
  fit?: string
  duration?: number
  easing?: string
}

const Image = ({
  src,
  alt,
  fit = "contain",
  easing = "cubic-bezier(0.7, 0, 0.6, 1)",
  duration = 3000,
}: ImageProperties) => {
  const { loading, error, onLoad, onError } = useImageLoading(src)
  const props = {
    src,
    alt,
    fit,
    duration,
    easing,
    onLoad,
    onError,
  }
  return (
    <>
      <StyledImage {...props} />
      {loading ? <LoadingDisplay /> : null}
      {error ? <ErrorDisplay /> : null}
    </>
  )
}

export default Image

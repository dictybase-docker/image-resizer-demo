import { useState } from "react"

const useImageLoading = (objectURL: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const onError = () => {
    setLoading(false)
    setError(true)
  }
  const onLoad = () => {
    URL.revokeObjectURL(objectURL)
    setLoading(false)
  }
  return { loading, error, onLoad, onError }
}

export default useImageLoading

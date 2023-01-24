import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Box from "@mui/material/Box"
import UploadDragInfo from "./UploadDragInfo"
import UploadDisplayText from "./UploadDisplayText"

const boxStyles = {
  border: 2,
  borderStyle: "dashed",
  flexBasis: "40%",
}

const ImageUpload = () => {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <Box {...getRootProps()} m={4} p={5} sx={boxStyles}>
      <input {...getInputProps()} />
      {isDragActive ? <UploadDragInfo /> : <UploadDisplayText />}
    </Box>
  )
}

export default ImageUpload

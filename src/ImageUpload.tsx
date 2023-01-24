import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Box from "@mui/material/Box"
import UploadDragInfo from "./UploadDragInfo"
import UploadDisplayText from "./UploadDisplayText"
import { useSetAtom } from "jotai"
import fileAtom from "./state"

const boxStyles = {
  border: 2,
  borderStyle: "dashed",
  flexBasis: "40%",
}

const ImageUpload = () => {
  const setFileAtom = useSetAtom(fileAtom)
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    console.log(acceptedFiles[0])
    setFileAtom(acceptedFiles[0])
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

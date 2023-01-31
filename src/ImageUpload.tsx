import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Box from "@mui/material/Box"
import UploadDragInfo from "./UploadDragInfo"
import UploadDisplayText from "./UploadDisplayText"
import { useSetAtom } from "jotai"
import {fileAtom} from "./state"
import {percentWindowHeight} from "./height"

const boxStyles = {
  border: 2,
  borderStyle: "dashed",
  flexBasis: "40%",
}

const ImageUpload = () => {
  const setFileAtom = useSetAtom(fileAtom)
  const boxStylesWithHeight = {
    height: `${percentWindowHeight(40)}px`,
    ...boxStyles,
  }

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    setFileAtom(URL.createObjectURL(acceptedFiles[0]))
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "image/*": [] },
  })
  return (
    <Box {...getRootProps()} m={4} p={5} sx={boxStylesWithHeight}>
      <input {...getInputProps()} />
      {isDragActive ? <UploadDragInfo /> : <UploadDisplayText />}
    </Box>
  )
}

export default ImageUpload

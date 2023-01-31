import Box from "@mui/material/Box"
import Image from "./Image"
import { useAtomValue } from "jotai"
import fileAtom from "./state"
import percentWindowHeight from "./height"

const ImageDisplay = () => {
  const imageFile = useAtomValue(fileAtom)
  return (
    <Box
      sx={{ flexBasis: "45%", height: `${percentWindowHeight(75)}px` }}
      pt={3}>
      {imageFile ? <Image src={imageFile} /> : null}
    <Box sx={{ flexBasis: "45%", height: `${initialHeight}px` }} pt={3}>
      {imageFile ? <Image src={imageFile} fit="fill" /> : null}
      {imageFile ? <Image src={imageFile} fit="fill" /> : <></>}
      {boxRef.current && imageFile ? (
        <Resizer element={boxRef.current} />
      ) : (
        <></>
    </Box>
  )
}
export default ImageDisplay

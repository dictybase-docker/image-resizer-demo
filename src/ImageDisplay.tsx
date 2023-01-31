import Box from "@mui/material/Box"
import Image from "./Image"
import { useAtomValue,useAtom } from "jotai"
import {fileAtom, dimesionAtom} from "./state"
import { percentWindowHeight, percentWindowWidth } from "./height"
import {  useEffect, useRef } from "react"
import Resizer from "./Resizer"


const ImageDisplay = () => {
  const imageFile = useAtomValue(fileAtom)
  const [dimension, setDimension] = useAtom(dimesionAtom)
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setDimension({
      width: percentWindowWidth(45),
      height: percentWindowHeight(75),
    })
  }, [])
  return (
    <Box
      sx={{
        flexBasis: `${dimension.width}px`,
        height: `${dimension.height}px`,
        position: "relative",
      }}
      ref={boxRef}
      pt={3}>
      {imageFile ? <Image src={imageFile} fit="fill" /> : <></>}
      {boxRef.current && imageFile ? (
        <Resizer element={boxRef.current} />
      ) : (
        <></>
      )}
    </Box>
  )
}
export default ImageDisplay

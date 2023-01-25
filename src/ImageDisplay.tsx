import Box from "@mui/material/Box"
import Image from "./Image"
import { useAtomValue } from "jotai"
import fileAtom from "./state"

const ImageDisplay = () => {
  const imageFile = useAtomValue(fileAtom)
  return (
    <Box sx={{ flexBasis: "45%" }} pt={3}>
      {imageFile ? <Image src={imageFile} height="30%" /> : null}
    </Box>
  )
}
export default ImageDisplay

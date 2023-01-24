import Typography from "@mui/material/Typography"
import { teal } from "@mui/material/colors"

const typoStyles = { color: teal[900], fontWeight: 600 }

const UploadDragInfo = () => (
  <Typography sx={typoStyles} variant="h6">
    Drop the file here
  </Typography>
)

export default UploadDragInfo

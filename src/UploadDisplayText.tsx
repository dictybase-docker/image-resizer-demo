import Typography from "@mui/material/Typography"
import { teal } from "@mui/material/colors"

const typoStyles = {
  color: teal[900],
  fontWeight: 600,
}

const UploadDisplayText = () => (
  <>
    <Typography variant="h6" sx={typoStyles}>
      Drag and drop some file here
    </Typography>
    <Typography sx={typoStyles} variant="h6">
      or click to select files
    </Typography>
  </>
)

export default UploadDisplayText

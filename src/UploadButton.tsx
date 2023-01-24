import Button from "@mui/material/Button"
import PhotoCamera from "@mui/icons-material/PhotoCamera"

const UploadButton = () => {
  return (
    <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
      Upload Image
      <input hidden accept="image/*" multiple type="file" />
    </Button>
  )
}
export default UploadButton

import SvgIcon from "@mui/material/SvgIcon"
import Container from "@mui/material/Container"
import BrokenImageTwoToneIcon from "@mui/icons-material/BrokenImageTwoTone"

const styles = {
  width: "100%",
  marginLeft: "-100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const ErrorDisplay = () => (
  <Container disableGutters sx={styles}>
    <SvgIcon fontSize="large" color="error">
      <BrokenImageTwoToneIcon />
    </SvgIcon>
  </Container>
)

export default ErrorDisplay

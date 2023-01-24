import Container from "@mui/material/Container"
import CircularProgress from "@mui/material/CircularProgress"

const styles = {
  width: "100%",
  marginLeft: "-100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const LoadingDisplay = () => (
  <Container disableGutters sx={styles}>
    <CircularProgress size={56} thickness={6} />
  </Container>
)

export default LoadingDisplay

import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import NavigationBar from "./NavigationBar"
import ImageUpload from "./ImageUpload"

function App() {
  return (
    <CssBaseline>
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ flexGrow: 1 }}>
          <NavigationBar />
        </Box>
        <Stack direction="row" spacing={4}>
          <ImageUpload />
        </Stack>
      </Container>
    </CssBaseline>
  )
}

export default App

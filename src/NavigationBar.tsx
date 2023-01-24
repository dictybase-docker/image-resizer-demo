import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const NavigationBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" sx={{ flexGrow: 1 }}>
        Image resizer
      </Typography>
    </Toolbar>
  </AppBar>
)
export default NavigationBar

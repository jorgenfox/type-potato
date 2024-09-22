// src/components/Header.tsx
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Jörgen Kristofer Rebane
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/form"
          >
            Mingi form
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

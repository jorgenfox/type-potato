import { Typography, Box, Link } from "@mui/material"

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">Tere tulemast minu lehele!</Typography>
      <br />
      <Link
        href="https://github.com/jorgenfox/type-potato"
        underline="hover"
      >
        {"Veebilehe GitHub repo"}
      </Link>
    </Box>
  )
}

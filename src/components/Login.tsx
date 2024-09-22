import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { FormEvent, useState } from "react"

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(form)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center" }}
          >
            Login
          </Typography>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            onChange={handleChange}
            value={form.username}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={form.password}
          />
          <Button
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

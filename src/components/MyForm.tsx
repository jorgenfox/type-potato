import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { FormEvent, useState } from "react"

export default function MyForm() {
  const [form, setForm] = useState({ name: "", interests: "" })

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
            My Form
          </Typography>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleChange}
            value={form.name}
          />
          <TextField
            name="interests"
            label="Interests"
            variant="outlined"
            onChange={handleChange}
            value={form.interests}
          />
          <Button
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

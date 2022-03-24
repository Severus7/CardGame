import logo from "./logo.svg";
import "./App.css";
import { Container, Grid, ThemeProvider, Box, TextField } from "@mui/material";
import CardComponent from "./component/CardComponent";
import darkTheme from "./assets/theme";

function App() {
  let numA = Math.floor(Math.random() * 10) + 1; // Generates a number from 0 to 10
  let numB = Math.floor(Math.random() * 10) + 1; // Generates a number from 0 to 10

  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={10}>
          <Grid item lg={6} md={6} xs={12}>
            <CardComponent title="Card 1" content={numA} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <CardComponent title="Card 2" content={numB} />
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{ marginTop: 10, display: "flex", justifyContent: "center" }}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Container>
    </ThemeProvider>
  );
}

export default App;

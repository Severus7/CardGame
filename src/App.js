import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Grid,
  ThemeProvider,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import CardComponent from "./component/CardComponent";
import darkTheme from "./assets/theme";
import { useState, useEffect } from "react";

function App() {
  // let numA = Math.floor(Math.random() * 10) + 1; // Generates a number from 0 to 10
  // let numB = Math.floor(Math.random() * 10) + 1; // Generates a number from 0 to 10
  const [numB, setNumB] = useState(Math.floor(Math.random() * 10) + 1);
  const [numA, setNumA] = useState(Math.floor(Math.random() * 10) + 1);
  const [numC, setNumC] = useState(Math.floor(Math.random() * 10) + 1);
  const [round, setRound] = useState(0);
  const [points, setPoints] = useState(0);
  const [input, setInput] = useState("");
  const [correctAnswerA, setCorrectAnswerA] = useState(
    (numC >= numA && numC <= numB) || (numC <= numA && numC >= numB)
  );
  const [correctAnswerB, setCorrectAnswerB] = useState(
    numC > numA || numC > numB //Higher true
  );

  const reload = () => {
    setNumA(Math.floor(Math.random() * 10) + 1);
    setNumB(Math.floor(Math.random() * 10) + 1);
  };

  const test = (e) => {
    e.preventDefault();

    if (round < 5) {
      setNumC(Math.floor(Math.random() * 10) + 1);
      setRound(round + 1);

      if (numA === numB) {
        if (input.toLowerCase() === "higher" && correctAnswerB) {
          alert(
            `Card 3 is ${numC}, and is higher than Card 1 and Card 2. You won!`
          );
          setPoints(points + 1);
          reload();
        } else if (input.toLowerCase() === "lower" && !correctAnswerB) {
          alert(
            `Card 3 is ${numC}, and is lower than Card 1 and Card 2. You won!`
          );
          setPoints(points + 1);
          reload();
        } else {
          alert(`Card 3 is ${numC}! You Lost!`);
          reload();
        }
      } else {
        if (
          input.toLowerCase() === "deal" &&
          ((numC >= numA && numC <= numB) || (numC <= numA && numC >= numB))
        ) {
          console.log(input.toLowerCase());
          alert(
            `Card 3 is ${numC}, and is in-between ${numA} and ${numB}. You won!`
          );
          setPoints(points + 1);
          reload();
        } else if (
          input.toLowerCase() === "no deal" &&
          !((numC >= numA && numC <= numB) || (numC <= numA && numC >= numB))
        ) {
          console.log(input.toLowerCase());
          alert(
            `Card 3 is ${numC}, and is not in-between ${numA} and ${numB}. You won!`
          );
          setPoints(points + 1);
          reload();
        } else {
          console.log(input.toLowerCase());
          alert(`Card 3 is ${numC}! You Lost!`);
          reload();
        }
      }
    } else {
      alert("Game is over!, Your score is " + points);
      setRound(0);
      setPoints(0);
    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <p className="round">Round: {round}</p>
      <p className="round">Points: {points}</p>
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

      <Grid
        container
        direction="column"
        W
        sx={{ marginTop: 10, textAlign: "center" }}
      >
        <Grid item>
          <Typography color="primary" gutterBottom>
            What is your guess? (Deal, No Deal, Higher, Lower)
          </Typography>
        </Grid>
        <Grid item container sx={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={test}>
            <Grid item sx={{ marginBottom: 2 }}>
              <TextField
                onChange={(e) => setInput(e.target.value)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

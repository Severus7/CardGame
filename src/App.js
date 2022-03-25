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
  const [input, setInput] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(
    (numC >= numA && numC <= numB) || (numC <= numA && numC >= numB)
  );
  const [choice, setChoice] = useState("Higher or Lower?");

  if (numA === numB) {
    console.log(choice);
  }

  useEffect(() => {
    if (numA === numB) {
      console.log(choice);
    } else {
      setChoice("Deal or No Deal?");
    }
  }, []);

  const test = (e) => {
    e.preventDefault();

    setNumC(Math.floor(Math.random() * 10) + 1);
    setRound(round + 1);

    if (numA === numB) {
      console.log("Hello");
    } else {
      if (input === "DEAL" && correctAnswer) {
        alert(
          `Card 3 is ${numC}, and is in-between ${numA} and ${numB}. You won!`
        );
      } else if (input === "NO DEAL" || correctAnswer) {
        alert(
          `Card 3 is ${numC}, and is not in-between ${numA} and ${numB}. You won!`
        );
      } else {
        alert("You lost! HAHAHA weakshit");
      }
    }

    // if (input === "NO DEAL" && correctAnswer) {
    //   alert(
    //     `Card 3 is ${numC}, and is not in-between ${numA} and ${numB}. You won!`
    //   );
    // } else {
    //   alert("You lost! HAHAHA weakshit");
    // }
  };

  console.log(numC);
  console.log(correctAnswer);

  // const test = (e) => {
  //   e.preventDefault();
  //   if (input) {
  //     console.log(input);
  //   }
  //   setNumC(Math.floor(Math.random() * 10) + 1);
  //   setRound(round + 1);
  //   if ((numC >= numA && numC <= numB) || (numC <= numA && numC >= numB)) {
  //     // console.log(numC + ' is between ' + numA + ' and ' + numB);
  //     alert(
  //       "Card 3: " +
  //         numC +
  //         " is between " +
  //         numA +
  //         " and " +
  //         numB +
  //         ", You won!"
  //     );
  //     setNumA(Math.floor(Math.random() * 10) + 1);
  //     setNumB(Math.floor(Math.random() * 10) + 1);
  //   } else {
  //     // console.log(numC + ' is not in between ' + numA + ' and ' + numB);
  //     alert(
  //       "Card 3: " +
  //         numC +
  //         " is not in between " +
  //         numA +
  //         " and " +
  //         numB +
  //         ", You won!"
  //     );
  //     setNumA(Math.floor(Math.random() * 10) + 1);
  //     setNumB(Math.floor(Math.random() * 10) + 1);
  //   }
  // };

  // const reset = () => {
  //   setNumA(Math.floor(Math.random() * 10) + 1);
  //   setNumB(Math.floor(Math.random() * 10) + 1);
  //   setNumC(0);
  // }

  return (
    <ThemeProvider theme={darkTheme}>
      <p className="round">{round}</p>
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
        sx={{ marginTop: 10, textAlign: "center" }}
      >
        <Grid item>
          <Typography color="primary" gutterBottom>
            {choice}
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

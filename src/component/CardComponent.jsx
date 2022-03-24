import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const CardComponent = (props) => {
  return (
    <Card
      sx={{ maxWidth: "100%", minWidth: 100, height: 300, textAlign: "center" }}
    >
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="h3" component="h3">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

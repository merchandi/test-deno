import express from "npm:express@4.18.2";

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(3000);
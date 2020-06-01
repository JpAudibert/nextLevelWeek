import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  response.json([
    "João Pedro",
    "Gabriel Antônio"
  ]);
});

app.listen(3333);

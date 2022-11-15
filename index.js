const express = require("express");
const personaRoutes = require("./src/v1/routes/personaRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/personas", personaRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
})
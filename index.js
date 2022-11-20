const express = require("express");
// const personaRoutes = require("./src/v1/routes/personaRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use("/api/v1/personas", personaRoutes);


const personaController = require("./src/controllers/personaController");

app.get('/api/v1/personas/', personaController.getAllPersonas);

app.get('/api/v1/personas/:personaId', personaController.getOnePersona);

app.post('/api/v1/personas/', personaController.createNewPersona);

app.patch('/api/v1/personas/:personaId', personaController.updateOnePersona);

app.delete('/api/v1/personas/:personaId', personaController.deleteOnePersona);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
})
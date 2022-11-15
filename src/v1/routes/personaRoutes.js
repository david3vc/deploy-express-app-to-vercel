const express = require("express");
const personaController = require("../../controllers/personaController");

const router = express.Router();

router.get('/', personaController.getAllPersonas);

router.get('/:personaId', personaController.getOnePersona);

router.post('/', personaController.createNewPersona);

router.patch('/:personaId', personaController.updateOnePersona);

router.delete('/:personaId', personaController.deleteOnePersona);

module.exports = router;
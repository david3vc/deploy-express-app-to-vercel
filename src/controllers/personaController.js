const personaService = require("../services/personaService");

const getAllPersonas = async (req, res) => {
    try {
      const allPersonas = await personaService.getAllPersonas()
      res.send({ status: "OK", data: allPersonas });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const getOnePersona = async (req, res) => {
    const {
      params: { personaId },
    } = req;
    if (!personaId) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':personaId' can not be empty" },
        });
    }
    try {
      const workout = await personaService.getOnePersona(personaId);
      res.send({ status: "OK", data: workout });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const createNewPersona = async (req, res) => {
    const { body } = req;
    if (
      !body.nombre ||
      !body.direccion ||
      !body.edad
    ) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: {
            error:
              "One of the following keys is missing or is empty in request body: 'nombre', 'direccion', 'edad'",
          },
        });
      return;
    }
    const newPersona = {
      nombre: body.nombre,
      direccion: body.direccion,
      edad: body.edad,
    };
    try {
      const createdPersona = await personaService.createNewPersona(newPersona);
      res.status(201).send({ status: "OK", data: createdPersona });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const updateOnePersona = async (req, res) => {
    const {
      body,
      params: { personaId },
    } = req;
    if (!personaId) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':personaId' can not be empty" },
        });
    }
    try {
      const updatedPersona = await personaService.updateOnePersona(personaId, body);
      res.send({ status: "OK", data: updatedPersona });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const deleteOnePersona = async (req, res) => {
    const {
      params: { personaId },
    } = req;
    if (!personaId) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':personaId' can not be empty" },
        });
    }
    try {
      const deletedPersona = await personaService.deleteOnePersona(personaId);
      res.status(200).send({ status: "OK", data: deletedPersona });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  module.exports = {
    getAllPersonas,
    getOnePersona,
    createNewPersona,
    updateOnePersona,
    deleteOnePersona,
  };
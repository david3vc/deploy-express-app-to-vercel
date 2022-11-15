const { v4: uuid } = require("uuid");
const Persona = require("../database/Persona");

const getAllPersonas = async () => {
    try {
        const allPersonas = await Persona.getAllPersonas();
        return allPersonas;
    } catch (error) {
        throw error;
    }
};

const getOnePersona = async personaId => {
    try {
        const persona = await Persona.getOnePersona(personaId);
        return persona;
    } catch (error) {
        throw error;
    }
};

const createNewPersona = async newPersona => {
    const personaToInsert = {
        ...newPersona,
    };
    try {
        const createdPersona = await Persona.createNewPersona(personaToInsert);
        return createdPersona;
    } catch (error) {
        throw error;
    }
};

const updateOnePersona = async (personaId, changes) => {
    try {
        const updatedWorkout = await Persona.updateOnePersona(personaId, changes);
        return updatedWorkout;
    } catch (error) {
        throw error;
    }
};

const deleteOnePersona = async personaId => {
    try {
        const deletedPersona = await Persona.deleteOnePersona(personaId);
        return deletedPersona;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllPersonas,
    getOnePersona,
    createNewPersona,
    updateOnePersona,
    deleteOnePersona,
};
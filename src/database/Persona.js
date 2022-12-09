const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'david3vc',
//     host: 'localhost',
//     database: 'user_db',
//     password: '1234',
//     port: 5432,
// })
const pool = new Pool({
    user: 'postgres',
    host: '35.247.245.198',
    database: 'postgres',
    password: '1234',
    port: 5432,
})

const getAllPersonas = () => {
    try {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * FROM public.persona ORDER BY id ASC',
                (error, results) => {
                  if (error) {
                    reject(error);
                  }
                  resolve(results.rows);
                }
              );
        }) 
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getOnePersona = personaId => {
    try {
        const id = parseInt(personaId)
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * FROM persona WHERE id = $1', [id],
                (error, results) => {
                  if (error) {
                    reject(error);
                  }
                  resolve(results.rows);
                }
              );
        }) 
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const createNewPersona = newPersona => {
    try {
        const {
            nombre,
            direccion,
            edad
        } = newPersona;
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO persona (nombre, direccion, edad) VALUES ($1, $2, $3)', [nombre, direccion, edad],
                (error, results) => {
                  if (error) {
                    reject(error);
                  }
                  resolve("Se registró con éxito.");
                }
              );
        }) 
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const updateOnePersona = (personaId, changes) => {
    try {
        const id = parseInt(personaId)
        const {
            nombre,
            direccion,
            edad
        } = changes;
        return new Promise((resolve, reject) => {
            pool.query(
                'UPDATE persona SET nombre = $1, direccion = $2, edad = $3 WHERE id = $4', [nombre, direccion, edad, id],
                (error, results) => {
                  if (error) {
                    reject(error);
                  }
                  resolve("Se guardó con éxito.");
                }
              );
        })
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const deleteOnePersona = personaId => {
    try {
        const id = parseInt(personaId)
        return new Promise((resolve, reject) => {
            pool.query(
                'DELETE FROM persona WHERE id = $1', [id],
                (error, results) => {
                  if (error) {
                    reject(error);
                  }
                  resolve("Se eliminó con éxito.");
                }
              );
        })
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

module.exports = {
    getAllPersonas,
    getOnePersona,
    createNewPersona,
    updateOnePersona,
    deleteOnePersona,
}

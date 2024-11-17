import { Router } from 'express';
import { query } from '../db.js';
const router = Router();

router.get('/users', async (req, res) => {
  try {
    const { rows } = await query('SELECT * FROM datos_personales');
    res.json(rows);
  } catch (err) {
    console.error('Error ejecutando la consulta', err);
    res
      .status(500)
      .json({ message: 'Error en la consulta de la base de datos' });
  }
});
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await query(
      'SELECT * FROM datos_personales WHERE id = $1',
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    console.log(rows); // Imprimir el registro encontrado
    res.json(rows); // Enviar el registro como respuesta
  } catch (error) {
    console.error('Error ejecutando la consulta', err);
    res
      .status(500)
      .json({ message: 'Error en la consulta de la base de datos' });
  }
});

router.post('/users', async (req, res) => {
  const data = req.body; // Obtener los datos del cuerpo de la solicitud
  try {
    const { rows } = await query(
      'INSERT INTO datos_personales (nombre, fecha_nac, domicilio, religion, ocupacion, genero, estado_civil, telefono, escolaridad, padre_tutor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        data.nombre,
        data.fecha_nac,
        data.domicilio,
        data.religion,
        data.ocupacion,
        data.genero,
        data.estado_civil,
        data.telefono,
        data.escolaridad,
        data.padre_tutor
      ]
    );
    // Enviar la respuesta con el registro insertado
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al insertar usuario', error);
    res
      .status(500)
      .json({ message: 'Error al insertar usuario en la base de datos' });
  }
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await query(
      'DELETE * FROM datos_personales WHERE id = $1 RETURNING *'[id]
    );
    if (rowCount === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json({ message: 'Usuario Eliminado' }); // Enviar el registro como respuesta de que lo hizo
  } catch (error) {
    console.error('Error ejecutando la consulta', err);
    res
      .status(500)
      .json({ message: 'Error en la consulta de la base de datos' });
  }
});
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body; // Obtener los datos del cuerpo de la solicitud
  try {
    const { rows } = await query(
      'UPDATE datos_personales SET nombre = $1, fecha_nac = $2, domicilio = $3, religion = $4, ocupacion = $5, genero = $6, estado_civil = $7, telefono = $8, escolaridad = $9, padre_tutor = $10 WHERE id = $11 RETURNING *',
      [
        data.nombre,
        data.fecha_nac,
        data.domicilio,
        data.religion,
        data.ocupacion,
        data.genero,
        data.estado_civil,
        data.telefono,
        data.escolaridad,
        data.padre_tutor,
        id
      ]
    );
    // Enviar la respuesta con el registro insertado
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al ACTUALIZAR usuario', error);
    res
      .status(500)
      .json({ message: 'Error al ACTUALIZAR usuario en la base de datos' });
  }
});

export default router;

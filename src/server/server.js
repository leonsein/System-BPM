const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres', // Asegúrate de que sea el nombre de usuario correcto
  host: 'localhost',
  database: 'Registro_usuarios',
  password: '10101010', // Verifica que esta sea la contraseña correcta
  port: 5432,
});

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Para analizar las solicitudes con formato JSON

// Ruta para el registro de usuario
app.post('/register', async (req, res) => {
  const { nombre, apellido, correo, contraseña } = req.body;

  try {
    const query = 'INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES ($1, $2, $3, $4)';
    const values = [nombre, apellido, correo, contraseña];

    await pool.query(query, values);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar el usuario', details: error.message });
  }
});

// Ruta para el inicio de sesión
app.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE correo = $1 AND contraseña = $2';
    const values = [correo, contraseña];
    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
  }
});

// Inicia el servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

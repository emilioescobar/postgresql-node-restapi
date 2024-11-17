import pg from 'pg';

// Configuración de la conexión a la base de datos
const pool = new pg.Pool({
  user: 'emilio', // Usuario de PostgreSQL
  host: 'localhost', // Host de la base de datos
  database: 'my_db', // Nombre de la base de datos
  password: 'raspberrypi', // Contraseña del usuario
  port: 5432 // Puerto de PostgreSQL (por defecto es 5432)
});

// Exportar el pool de conexiones para usarlo en otros archivos
export const query = (text, params) => pool.query(text, params);
export { pool };

// CREATE TABLE datos_personales (
//   id SERIAL PRIMARY KEY,
//   Nombre VARCHAR(100) NOT NULL,
//   fecha_nac DATE NOT NULL,
//   domicilio VARCHAR(255) NOT NULL,
//   religion VARCHAR(50) NOT NULL,
//   ocupacion VARCHAR(100) NOT NULL,
//   genero VARCHAR(20) NOT NULL,
//   estado_civil VARCHAR(30) NOT NULL,
//   telefono VARCHAR(15) NOT NULL,
//   escolaridad VARCHAR(50) NOT NULL,
//   padre_tutor VARCHAR(100),
//   fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// INSERT INTO datos_personales (
//   nombre,
//   fecha_nac,
//   domicilio,
//   religion,
//   ocupacion,
//   genero,
//   estado_civil,
//   telefono,
//   escolaridad,
//   padre_tutor
// )
// VALUES (
//   'Juan Pérez',
//   '1990-05-15',
//   'Calle Falsa 123, Ciudad Ejemplo',
//   'Católica',
//   'Ingeniero',
//   'Masculino',
//   'Soltero',
//   '1234567890',
//   'Licenciatura',
//   'José Pérez'
// );

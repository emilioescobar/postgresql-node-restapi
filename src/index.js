import express from 'express'
import useRoutes from "./routes/users.routes.js"
const app = express()
app.use(express.json());
app.use(useRoutes)
app.listen(3000)

console.log("Server listen in port", 3000);


// docker pull postgres
// descarga la imagen de docker

// $ docker run --name some-postgres -e POSTGRES_PASSWORD=raspberrypi -e POSTGRES_USER=emilio -e POSTGRES_DB=my_db -p 5432:5432 -d postgres
// corre contenedor con variables de entorno y puerto

// d9aeb1f41bdaf2e345e439bbf30db466faca1770898c2476993099bcd9c80ce7
// has que genera al correrlo


// docker stop <nombre del contenedor>  
// detien contenedor

// docker rm <nombre del contenedor>
// elimina contenedor

// docker exec -it <nombre-contenedor> bash
// nos conecta para ejecutar comandos de postgres

// psql -U <usuario> --db <nombre-base-datos> --pasword
// este comando pide conactarse a la base de datos en segundo plano y pide password



// https://youtu.be/hVrKX2RtigQ?si=HQmSXWH2_x9IsdT0&t=1247
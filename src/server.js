const Hapi = require("@hapi/hapi");

//Plugin Mahasiswa
const mahasiswa = require("./api/mahasiswa");
const ServiceMahasiswa = require("./service/MahasiswaService");

//Other Plugin

(async () => {
  const serviceMahasiswa = new ServiceMahasiswa();

  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: true,
    },
  });

  try {
    await server.register([
      {
        plugin: mahasiswa,
        options: {
          service: serviceMahasiswa,
        },
      },
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (err) {
    console.log(err);
  }
})();

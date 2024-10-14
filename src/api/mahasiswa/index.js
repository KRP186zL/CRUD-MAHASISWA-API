const routes = require("./routes");
const HandlerMahasiswa = require("./handler");
module.exports = {
  name: "mahasiswaPlugin",
  version: "1.0.0",
  register: async (server, { service }) => {
    const handlerMahasiswa = new HandlerMahasiswa(service);
    server.route(routes(handlerMahasiswa));
  },
};

const routes = (handler) => [
  {
    method: "POST",
    path: "/mahasiswa",
    handler: handler.postMahasiswaHandler,
  },
  {
    method: "GET",
    path: "/mahasiswa",
    handler: handler.getMahasiswaHandler,
  },
  {
    method: "GET",
    path: "/mahasiswa/{nim}",
    handler: handler.getMahasiswaByNimHandler,
  },
  {
    method: "GET",
    path: "/mahasiswa/search",
    handler: handler.searchMahasiswaHandler,
  },
  {
    method: "PUT",
    path: "/mahasiswa/{nim}",
    handler: handler.putMahasiswaByNimHandler,
  },
  {
    method: "DELETE",
    path: "/mahasiswa/{nim}",
    handler: handler.deleteMahasiswaByNimHandler,
  },
];

module.exports = routes;

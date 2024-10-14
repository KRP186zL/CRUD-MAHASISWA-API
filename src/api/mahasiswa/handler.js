class HandlerMahasiswa {
  constructor(service) {
    this._service = service;

    this.postMahasiswaHandler = this.postMahasiswaHandler.bind(this);
    this.getMahasiswaHandler = this.getMahasiswaHandler.bind(this);
    this.getMahasiswaByNimHandler = this.getMahasiswaByNimHandler.bind(this);
    this.searchMahasiswaHandler = this.searchMahasiswaHandler.bind(this);
    this.putMahasiswaByNimHandler = this.putMahasiswaByNimHandler.bind(this);
    this.deleteMahasiswaByNimHandler =
      this.deleteMahasiswaByNimHandler.bind(this);
  }

  async postMahasiswaHandler(request, h) {
    try {
      const { nama, kelas, prodi, orangTua, jenisKelamin, penghasilanOrtu } =
        request.payload;

      const data = await this._service.postMahasiswa({
        nama,
        kelas,
        prodi,
        orangTua,
        jenisKelamin,
        penghasilanOrtu,
      });

      const response = h.response({
        status: "success",
        message: "Data berhasil ditambahkan",
        data,
      });
      response.code(201);

      return response;
    } catch (err) {
      const response = h.response({
        status: "fail",
        message: err.message,
      });
      response.code(400);

      return response;
    }
  }

  async getMahasiswaHandler(_request, h) {
    const mahasiswa = await this._service.getMahasiswa();

    const response = h.response({
      status: "success",
      message:
        mahasiswa.length > 0
          ? "Mahasiswa berhasil ditampilkan"
          : "Data kosong!",
      data: mahasiswa,
    });
    response.code(200);

    return response;
  }

  async getMahasiswaByNimHandler(request, h) {
    const { nim } = request.params;

    try {
      const mahasiswa = await this._service.getMahasiswaByNim(nim);

      return {
        status: "success",
        message: "Mahasiswa berhasil ditemukan",
        data: mahasiswa,
      };
    } catch (err) {
      const response = h.response({
        status: "fail",
        message: err.message,
      });
      response.code(404);

      return response;
    }
  }

  async searchMahasiswaHandler(request, h) {
    try {
      const mahasiswa = await this._service.searchMahasiswa(request.query);

      return {
        status: "success",
        message: "Mahasiswa dengan kriteria ditemukan",
        data: mahasiswa.map((mhs) => {
          const { nama, kelas, prodi } = mhs;
          return {
            nama,
            kelas,
            prodi,
          };
        }),
      };
    } catch (err) {
      const response = h.response({
        status: "fail",
        message: err.message,
      });
      response.code(404);

      return response;
    }
  }

  async putMahasiswaByNimHandler(request, h) {
    const { nim } = request.params;
    const { nama, kelas, prodi, orangTua, jenisKelamin, penghasilanOrtu } =
      request.payload;

    const updatedData = {};
    if (nama !== undefined) updatedData.nama = nama;
    if (kelas !== undefined) updatedData.kelas = kelas;
    if (prodi !== undefined) updatedData.prodi = prodi;
    if (orangTua !== undefined) updatedData.orangTua = orangTua;
    if (jenisKelamin !== undefined) updatedData.jenisKelamin = jenisKelamin;
    if (penghasilanOrtu !== undefined)
      updatedData.penghasilanOrtu = penghasilanOrtu;

    try {
      const updatedMahasiswa = await this._service.putMahasiswaByNim(
        nim,
        updatedData
      );

      const response = h.response({
        status: "success",
        message: "Mahasiswa berhasil diupdate",
        data: updatedMahasiswa,
      });
      response.code(200);

      return response;
    } catch (err) {
      const response = h.response({
        status: "fail",
        message: err.message,
      });
      response.code(404);

      return response;
    }
  }
  async deleteMahasiswaByNimHandler(request, h) {
    const { nim } = request.params;
    try {
      await this._service.deleteMahasiswa(nim);

      const response = h.response({
        status: "success",
        message: "Mahasiswa berhasil dihapus",
      });
      response.code(200);

      return response;
    } catch (err) {
      const response = h.response({
        status: "fail",
        message: err.message,
      });

      response.code(404);

      return response;
    }
  }
}
module.exports = HandlerMahasiswa;

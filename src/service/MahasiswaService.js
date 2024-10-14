const createNim = require("../utils/createNim");

class MahasiswaService {
  constructor() {
    this._mahasiswa = [];
    this._jumlahMahasiswa = 0;
  }
  async postMahasiswa(data) {
    const nim = createNim(++this._jumlahMahasiswa);
    const registeredOn = new Date().toISOString();

    const newMahasiswa = {
      nim,
      ...data,
      registeredOn,
    };

    this._mahasiswa.push(newMahasiswa);

    const isSuccess =
      this._mahasiswa.filter((data) => data.nim === nim).length > 0;

    if (!isSuccess) {
      throw new Error("Mahasiswa gagal ditambahkan");
    }
    return newMahasiswa;
  }

  async getMahasiswa() {
    const mahasiswa = this._mahasiswa.map((mhs) => {
      const { nim, nama, prodi, kelas } = mhs;
      return {
        nim,
        nama,
        kelas,
        prodi,
      };
    });
    return mahasiswa;
  }

  async getMahasiswaByNim(nim) {
    const mahasiswa = this._mahasiswa.filter(
      (mahasiswa) => mahasiswa.nim === nim
    )[0];
    if (!mahasiswa) {
      throw new Error("Mahasiswa tidak ditemukan");
    }

    return mahasiswa;
  }
  async searchMahasiswa({ nama, kelas, prodi }) {
    if (!nama && !kelas && !prodi) {
      throw new Error("Harus mengirimkan nama, kelas, atau prodi");
    }

    const mahasiswa = this._mahasiswa.filter((mhs) => {
      if (nama && !mhs.nama.toLowerCase().includes(nama.toLowerCase())) {
        return false;
      }
      if (kelas && mhs.kelas.toLowerCase() !== kelas.toLowerCase()) {
        return false;
      }
      if (prodi && mhs.prodi.toLowerCase() !== prodi.toLowerCase()) {
        return false;
      }
      return true;
    });

    if (mahasiswa.length < 1) {
      throw new Error("Tidak ada kriteria mahasiswa yang sesuai");
    }

    return mahasiswa;
  }

  async putMahasiswaByNim(nim, updatedData) {
    const index = this._mahasiswa.findIndex((mhs) => mhs.nim === nim);
    if (index === -1) {
      throw new Error("Mahasiswa tidak ditemukan");
    }
    this._mahasiswa[index] = {
      ...this._mahasiswa[index],
      ...updatedData,
    };
    return this._mahasiswa[index];
  }
  async deleteMahasiswa(nim) {
    const index = this._mahasiswa.findIndex((mhs) => mhs.nim === nim);
    if (index === -1) {
      throw new Error("Mahasiswa tidak ditemukan");
    }
    this._mahasiswa.splice(index, 1);
  }
}

module.exports = MahasiswaService;

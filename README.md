# Mahasiswa API

API ini menyediakan endpoint untuk mengelola data mahasiswa. Berikut adalah daftar endpoint yang tersedia:

## Daftar Endpoint

### 1. Tambah Mahasiswa

- **Endpoint**: `/mahasiswa`
- **Method**: `POST`
- **Deskripsi**: Menambahkan data mahasiswa baru.
- **Request Body**:
  ```json
  {
    "nama": "string",
    "kelas": "string",
    "prodi": "string",
    "orangTua": "string",
    "jenisKelamin": "string",
    "penghasilanOrtu": "string"
  }
  ```

- **Response**:
  - **201 Created**:
    ```json
    {
      "nim": "string",
      "nama": "string",
      "kelas": "string",
      "prodi": "string",
      "orangTua": "string",
      "jenisKelamin": "string",
      "penghasilanOrtu": "string",
      "registeredOn": "string"
    }
    ```
  - **400 Bad Request**: Jika data yang dikirim tidak valid.

### 2. Dapatkan Semua Mahasiswa

- **Endpoint**: `/mahasiswa`
- **Method**: `GET`
- **Deskripsi**: Mengambil semua data mahasiswa.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "nim": "string",
        "nama": "string",
        "kelas": "string",
        "prodi": "string"
      },
    ]
    ```

### 3. Dapatkan Mahasiswa Berdasarkan NIM

- **Endpoint**: `/mahasiswa/{nim}`
- **Method**: `GET`
- **Deskripsi**: Mengambil data mahasiswa berdasarkanNIM.

- **Response**:
  - **200 OK**:
    ```json
    {
      "nim": "string",
      "nama": "string",
      "kelas": "string",
      "prodi": "string",
      "orangTua": "string",
      "jenisKelamin": "string",
      "penghasilanOrtu": "string",
      "registeredOn": "string"
    }
    ```
  - **404 Not Found**: Jika mahasiswa dengan NIM yang diberikan tidak ditemukan.

### 4. Cari Mahasiswa

- **Endpoint**: `/mahasiswa/search`
- **Method**: `GET`
- **Deskripsi**: Mencari mahasiswa berdasarkan nama, kelas, atau prodi.
- **Query Parameters**:
  - [`nama`]: Nama mahasiswa (opsional)
  - [`kelas`]: Kelas mahasiswa (opsional)
  - [`prodi`]: Program studi mahasiswa (opsional)
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "nim": "string",
        "nama": "string",
        "kelas": "string",
        "prodi": "string"
      },
    ]
    ```
  - **404 Not Found**: Jika tidak ada mahasiswa yang sesuai dengan kriteria pencarian.

### 5. Perbarui Data Mahasiswa

- **Endpoint**: `/mahasiswa/{nim}`
- **Method**: `PUT`
- **Deskripsi**: Memperbarui data mahasiswa berdasarkan NIM.
- **Request Body**:
  ```json
  {
    "nama": "string",
    "kelas": "string",
    "prodi": "string",
    "orangTua": "string",
    "jenisKelamin": "string",
    "penghasilanOrtu": "string"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "nim": "string",
      "nama": "string",
      "kelas": "string",
      "prodi": "string",
      "orangTua": "string",
      "jenisKelamin": "string",
      "penghasilanOrtu": "string",
      "registeredOn": "string"
    }
    ```
  - **404 Not Found**: Jika mahasiswa dengan NIM yang diberikan tidak ditemukan.
  - **400 Bad Request**: Jika data yang dikirim tidak valid.

### 6. Hapus Mahasiswa

- **Endpoint**: `/mahasiswa/{nim}`
- **Method**: `DELETE`
- **Deskripsi**: Menghapus data mahasiswa berdasarkan NIM.
- **Response**:
  - **200 OK**: Jika mahasiswa berhasil dihapus.
  - **404 Not Found**: Jika mahasiswa dengan NIM yang diberikan tidak ditemukan.

## Cara Menggunakan

1. Clone repository ini.
2. Install dependencies dengan menjalankan `npm install`.
3. Jalankan server dengan `npm start`.
4. Gunakan tool seperti Postman atau cURL untuk mengakses endpoint yang tersedia.

## Kontak

Jika Anda memiliki pertanyaan atau masalah, silakan hubungi [Instagram](https://www.instagram.com/username) saya.

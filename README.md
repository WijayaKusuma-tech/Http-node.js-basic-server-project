
# 🔰 Http node.js basic server project

Ini adalah proyek sederhana yang mendemonstrasikan cara membuat server HTTP dasar dari awal menggunakan modul http bawaan di Node.js. Server ini mampu menangani beberapa rute (routing), metode HTTP (GET & POST), serta merespons dengan data dalam format JSON.


## 🟢 Tech Stack

**Node.js** Lingkungan eksekusi JavaScript di sisi server.

`Tidak ada framework eksternal (Vanilla Node.js).`


## 🔴 Features
- Server HTTP Murni: Dibuat hanya dengan modul `http` bawaan.
- Routing Sederhana: Mampu membedakan permintaan berdasarkan URL (`/` dan `/about`).
- Penanganan Metode HTTP: Memberikan respons berbeda untuk metode `GET` dan `POST`.
- Respons JSON: Semua respons dari server dikirim dalam format `application/json`.
- Pemrosesan Request Body: Mampu menerima dan memproses data JSON yang dikirimkan dalam request body pada metode `POST`.
- Penanganan Error Dasar: Memberikan status `404 Not Found` untuk rute yang tidak ada dan `400 Bad Request` untuk metode yang tidak diizinkan.


## 🟡 Installation

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:


**1.Clone repository ini (jika sudah ada di GitHub):**
```bash
git clone https://github.com/WijayaKusuma-tech/Http-node.js-basic-server-project.git
cd nama-repository
```
Jika hanya ada file lokal, cukup buka direktori proyek di terminal Anda.

**2.Install dependencies:**
Meskipun proyek ini tidak memiliki dependensi eksternal, menjalankan perintah ini adalah praktik yang baik untuk proyek Node.js.
```bash
npm install
```


## ♻ Menjalankan server

Untuk memulai server, jalankan perintah berikut di terminal Anda:

```bash
  node server.js
```

Anda akan melihat pesan konfirmasi bahwa server telah berhasil berjalan:
```bash
  Server is running at http://localhost:5000
```
Sekarang, server siap menerima permintaan pada port 5000.



## 🔵 Dokumentasi API (Endpoints)
Anda dapat berinteraksi dengan server menggunakan alat seperti [cURL](https://curl.se/docs/), [Postman](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/), atau langsung dari browser (untuk permintaan **GET**).

**1.Homepage**
- URL : `/`

- Method : `GET`

- Deskripsi : Mengembalikan pesan selamat datang untuk homepage.

*Contoh Request (cURL):*
```bash
curl -X GET http://localhost:5000/
```
*Contoh Respons Sukses (200 OK):*
```bash
{
    "message": "Ini adalah homepage"
}
```
- Catatan: Metode selain GET pada endpoint ini akan mengembalikan error 400 Bad Request.

**2.Halaman About (GET)**

Endpoint untuk mendapatkan informasi dari halaman "about".

- URL : `/about`

- Method : `GET`

- Deskripsi : Mengembalikan pesan untuk halaman "about".

*Contoh Request (cURL):*
```bash
curl -X GET http://localhost:5000/about
```
*Contoh Respons Sukses (200 OK):*
```bash
{
    "message": "Ini adalah halaman about"
}
```

**3.Halaman About (POST)**

Endpoint untuk mengirim data nama ke halaman "about" dan menerima sapaan.
- URL : `/about`

- Method : `POST`

- Deskripsi : Menerima data name dari request body dan mengembalikan pesan sapaan yang dipersonalisasi.

- Request Body (harus dalam format JSON):
```bash
{
    "name": "Wijaya"
}
```
*Contoh Request (cURL):*
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Wijaya\"}" http://localhost:5000/about
```
*Contoh Respons Sukses (200 OK):*
```bash
{
    "message": "Halo, Wijaya! Ini adalah halaman about"
}
```
- Catatan: Metode selain GET atau POST pada endpoint ini akan mengembalikan error 400 Bad Request.

**4. Rute Tidak Ditemukan**

Jika Anda mengakses URL selain yang didefinisikan di atas.

- URL : (Contoh: `/kontak`, `/profil`, `dll`.)

- Method : `GET`, `POST`, dll.

- Deskripsi : Server akan merespons dengan pesan bahwa halaman tidak ditemukan.

*Contoh Request (cURL):*
```bash
curl -X GET http://localhost:5000/random
```
*Contoh Respons Error (404 Not Found):*
```bash
{
    "message": "Halaman tidak ditemukan!"
}
```


## 🟣 License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


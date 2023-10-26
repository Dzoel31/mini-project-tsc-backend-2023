# Tugas Mini Project TSC Backend KSM Android

Tugas ini mencakup berbagai konsep JavaScript, termasuk Spread Operator, Destructuring Object/Array, Template Literal, Array Methods, Perulangan, dan Percabangan. Kami akan membuat aplikasi CRUD sederhana untuk mengelola data buku.

## Deskripsi Tugas

Anda akan membuat aplikasi sederhana yang memungkinkan Anda untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data yang ada. Anda akan menggunakan Node.js untuk membuat server API, dan data akan disimpan dalam file terpisah.

## Langkah-Langkah

1. **Persiapan:**
   - Pastikan Anda memiliki Node.js terinstal di komputer Anda.

2. **Kode JavaScript:**
   - Buat file JavaScript (`app.js`) yang akan menjadi server API.
   - Buat file terpisah (`data.js`) untuk menyimpan data sesuai tema kalian dengan beberapa data dummy. Gunakan Spread Operator dan Destructuring Object/Array untuk mengelola data ini.

3. **Server API:**
   - Buat server API menggunakan Express.js.
   - Tambahkan endpoint untuk CRUD operasi, yaitu Tambahkan, Dapatkan Daftar, Edit, dan Hapus.

4. **Array Methods:**
   - Gunakan Array Methods seperti `push()`, `forEach()`, `splice()`, dll., untuk mengelola data.

5. **Template Literal:**
   - Gunakan Template Literal untuk menampilkan data di halaman response.

6. **Perulangan dan Percabangan:**
   - Gunakan perulangan dan percabangan (contoh: `for`, `if`) jika diperlukan dalam backend Anda.

7. **Testing:**
   - Uji aplikasi Anda dengan menggunakan alat pengujian API seperti Postman atau melalui permintaan HTTP dari aplikasi klien Anda.

## Contoh Endpoint dan Response

### Endpoints

1. **Tambahkan Buku**:
   - Endpoint: `POST /addBook`
   - Deskripsi: Menambahkan buku baru ke dalam database.
   - Contoh Permintaan:
     ```json
     {
         "title": "Judul Buku",
         "author": "Penulis"
     }
     ```

2. **Dapatkan Daftar Buku**:
   - Endpoint: `GET /getBooks`
   - Deskripsi: Mendapatkan daftar semua buku yang ada dalam database.

3. **Edit Buku**:
   - Endpoint: `PUT /editBook/:index`
   - Deskripsi: Mengedit buku berdasarkan indeks (index) di database.
   - Contoh Permintaan:
     ```json
     {
         "title": "Judul Baru",
         "author": "Penulis Baru"
     }
     ```

4. **Hapus Buku**:
   - Endpoint: `DELETE /deleteBook/:index`
   - Deskripsi: Menghapus buku berdasarkan indeks (index) dari database.

## Cara Menjalankan

1. Clone Repositori ini
2. Masuk ke direktori project
3. Jalankan `npm run start` pada cmd
4. Jalankan collection dan environment test

   ```bash
   newman run mini_project_API_Test.postman_collection.json --environment mini_project_API_Test.postman_environment.json
   ```

5. Jika gagal coba install newman terlebih dahulu dengan perintah
`npm install newman`

# 🎓 Pilih PTN — Teman Setia Menuju Kampus Impianmu!

*Pilih PTN* adalah aplikasi web interaktif yang dirancang untuk membantu siswa SMA/SMK sederajat dalam menentukan kampus terbaik berdasarkan nilai tryout SNBT mereka. Lebih dari sekadar rekomendasi, aplikasi ini hadir dengan fitur belajar cerdas dan personal, agar pengguna makin siap menghadapi ujian sebenarnya.

---

## 🚀 Kenapa Pilih PTN?

Kami menemukan bahwa banyak siswa kesulitan dalam:

- Menentukan *PTN yang cocok* dengan nilai mereka.
- Mengetahui *subtes mana yang perlu diperbaiki*.
- Mengatur waktu belajar dengan *lebih fokus dan terstruktur*.

*Pilih PTN hadir sebagai solusi.*  
Kami memadukan teknologi web modern dan pendekatan Machine Learning untuk memberikan rekomendasi, insight belajar, dan fitur produktivitas dalam satu platform.

---

## ✨ Fitur Utama

🔍 *Rekomendasi PTN Otomatis*  
Cukup masukkan nilai tryout SNBT-mu. Sistem akan memberikan daftar PTN yang cocok menggunakan metode klasifikasi dan klusterisasi.

📚 *Saran Belajar Personal*  
Identifikasi subtes yang masih lemah dan dapatkan tips belajar yang sesuai untuk meningkatkan skor.

🗓 *Penjadwalan Belajar*  
Buat jadwal belajar seperti menggunakan Google Calendar — fleksibel, mudah, dan bisa disesuaikan.

⏱ *Pomodoro Timer*  
Gunakan teknik 25 menit belajar + 5 menit istirahat untuk menjaga fokus dan produktivitas.

---

## ⚙ Teknologi yang Digunakan

| Kategori     | Teknologi                                      |
|--------------|-------------------------------------------------|
| Frontend     | Webpack, Bootstrap, Vanilla JavaScript          |
| Backend      | Hapi.js (REST API)                              |
| Database     | PostgreSQL                                      |
| Tools        | Babel, IndexedDB, Service Worker, Prettier      |

---

## 📦 Cara Instalasi

### Prasyarat

- [Node.js](https://nodejs.org/) (versi 12+)
- [npm](https://www.npmjs.com/) (biasanya sudah termasuk dalam Node.js)

## Scripts

- Build for Production:

  ```shell
  npm run build
  ```

  Script ini menjalankan webpack dalam mode production menggunakan konfigurasi `webpack.prod.js` dan menghasilkan sejumlah file build ke direktori `dist`.

- Start Development Server:

  ```shell
  npm run start-dev
  ```

  Script ini menjalankan server pengembangan webpack dengan fitur live reload dan mode development sesuai konfigurasi di`webpack.dev.js`.

- Serve:
  ```shell
  npm run serve
  ```
  Script ini menggunakan [`http-server`](https://www.npmjs.com/package/http-server) untuk menyajikan konten dari direktori `dist`.

## Project Structure

Proyek starter ini dirancang agar kode tetap modular dan terorganisir.

```text
starter-project/
├── dist/                     # File hasil build produksi
├── src/
│   ├── public/
│   │   ├── assets/           # Aset tambahan (ikon, dll.)
│   │   └── images/           # Gambar dan media
│   ├── scripts/
│   │   ├── data/             # Komunikasi dengan API
│   │   ├── pages/            # Halaman aplikasi
│   │   ├── routes/           # Routing dan navigasi
│   │   └── utils/            # Fungsi pembantu
│   ├── styles/
│   │   ├── styles.css        # CSS utama
│   │   └── pomodoro.css      # CSS khusus Pomodoro
│   └── index.html            # HTML utama
├── webpack.common.js         # Konfigurasi umum Webpack
├── webpack.dev.js            # Konfigurasi dev
├── webpack.prod.js           # Konfigurasi production
├── package.json              # Metadata & dependensi proyek
├── STUDENT.txt               # Identitas mahasiswa/pembuat
└── README.md                 # Dokumentasi proyek ini
```
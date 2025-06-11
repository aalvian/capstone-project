# 🎓 Pilih PTN — Gapai Kampus Impianmu!

_Pilih PTN_ adalah aplikasi web interaktif yang dirancang untuk membantu siswa SMA/SMK sederajat dalam menentukan kampus terbaik berdasarkan nilai tryout SNBT mereka. Lebih dari sekadar rekomendasi, aplikasi ini hadir dengan fitur belajar cerdas dan personal, agar pengguna makin siap menghadapi ujian sebenarnya.

---

## 🚀 Kenapa Pilih PTN?

Kami menemukan bahwa banyak siswa kesulitan dalam:

- Menentukan _PTN yang cocok_ dengan nilai tryout.
- Mengetahui _subtes mana yang perlu diperbaiki_.
- Mengatur waktu belajar dengan _lebih fokus dan terstruktur_.

_Pilih PTN hadir sebagai solusi._  
Kami memadukan teknologi web modern dan pendekatan Machine Learning untuk memberikan rekomendasi, insight belajar, dan fitur produktivitas dalam satu platform.

---

## ✨ Fitur Utama

🔍 _Rekomendasi PTN Otomatis_  
Cukup masukkan nilai tryout SNBT-mu. Sistem akan memberikan daftar PTN yang cocok menggunakan metode klasifikasi dan klusterisasi.

📚 _Saran Belajar Personal_  
Identifikasi subtes yang masih lemah dan dapatkan tips belajar yang sesuai untuk meningkatkan skor.

🗓 _Penjadwalan Belajar_  
Buat jadwal belajar seperti menggunakan Google Calendar — fleksibel, mudah, dan bisa disesuaikan.

⏱ _Pomodoro Timer_  
Gunakan teknik 25 menit belajar + 5 menit istirahat untuk menjaga fokus dan produktivitas.

---

## ⚙ Teknologi yang Digunakan

| Kategori | Teknologi                                  |
| -------- | ------------------------------------------ |
| Frontend | Webpack, Bootstrap, Vanilla JavaScript     |
| Backend  | Hapi.js                                    |
| Database | Mysql                                      |
| Tools    | Babel, IndexedDB, Service Worker, Prettier |

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

- Start:
  ```shell
  npm run start
  ```
  Script ini menjalankan backend untuk mengaktifkan server konten dari direktori `backend`.

## 🌐 Deployment ke Railway

Kami menggunakan [Railway](https://railway.app) untuk deploy backend secara online.

### Langkah-Langkah Deploy Backend

1. **Login ke Railway**

   Buka [https://railway.app](https://railway.app) dan login menggunakan akun GitHub kamu.

2. **Buat Proyek Baru**

   - Klik **New Project** → pilih **Deploy from GitHub repo**.
   - Pilih repositori yang berisi backend proyek kamu (misalnya `capstone-project`).

3. **Tambahkan Environment Variables**

   Setelah proyek berhasil dibuat, buka tab **"Variables"** dan tambahkan variabel berikut:

   ```env
   DB_HOST=xxxx.proxy.rlwy.net
   DB_PORT=xxxxx
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=railway
   PORT=3000

## 📁 Project Structure

Proyek starter ini dirancang agar kode tetap modular dan terorganisir.

```text
capstone-project/
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

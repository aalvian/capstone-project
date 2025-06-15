export default class DashboardPage {
  async render() {
    return `
      <!-- banner -->
      <section id="dashboard" class="header mt-40">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 copywriting align-self-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
              <h1 class="big-header mb-20">
                Persiapkan Dirimu <br>
                Menghadapi UTBK 
              </h1>
              <p class="primary-copy mb-30">
                Maksimalkan persiapan UTBK dan perjalananmu ke PTN favorit<br>
                dengan fitur yang membantu kamu tetap produktif
              </p>
              <a href="#/login" class="btn btn-primary mr-10">Mulai Sekarang</a>
            </div>
            <div class="col-lg-7" data-aos="flip-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
              <img src="images/banner_header.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </section>

      <!-- content 1 -->
      <section id="fitur" class="features mt-70">
        <div class="container">
          <!-- atas -->
          <div class="row">
            <div class="col-lg-6 offset-lg-3 text-center">
              <h2 class="medium-header mb-10" data-aos="fade-up" data-aos-duration="500">
                Fitur Utama
              </h2>
              <p class="primary-copy mb-30" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                Sistem efisien meningkatkan semangat
              </p>
            </div>
          </div>

          <div class="row features-wrapper">
            <!-- left -->
            <div class="col-lg-7">
              <div class="col-lg-12 mb-30">
                <div class="big-features-card" data-aos="fade-fight" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div class="icon">
                    <img src="images/icon_gfb.png" alt="">
                  </div>
                  <div class="copy">
                    <h3 class="small-header mb-10">
                      Timer Pomodoro & Fokus Mode
                    </h3>
                    <p class="primary-copy mb-20">
                      Bekerja lebih efisien dengan sesi fokus terjadwal menggunakan teknik Pomodoro. 
                      Tingkatkan konsentrasi, kurangi kelelahan, dan jaga produktivitas sepanjang hari.
                    </p>
                    <a href="" class="text-button">Lihat Detail</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="big-features-card" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div class="icon">
                    <img src="images/icon_od.png" alt="">
                  </div>
                  <div class="copy">
                    <h3 class="small-header mb-10">
                      Task Management & To-Do List
                    </h3>
                    <p class="primary-copy mb-20">
                      Atur, prioritaskan, dan lacak tugas dengan sistem yang fleksibel dan terorganisir. 
                      Kelola pekerjaan dengan lebih efisien, hindari tugas tertunda, dan capai target tepat waktu
                    </p>
                    <a href="" class="text-button">Lihat Detail</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- right -->
            <div class="col-lg-5">
              <div class="col-lg-12 mb-30">
                <div class="small-features-card" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div class="icon">
                    <img src="images/icon_p.png" alt="">
                  </div>
                  <div class="copy">
                    <h3 class="small-header mb-10">
                      Prediksi Nilai
                    </h3>
                    <p class="primary-copy">
                      Cek prediksi skor UTBK-mu untuk
                      mengetahui peluang lolos ke PTN impian.
                    </p>
                  </div>
                </div>
              </div>
            
              <div class="col-lg-12 mb-30">
                <div class="small-features-card" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div class="icon">
                    <img src="images/icon_a.png" alt="">
                  </div>
                  <div class="copy">
                    <h3 class="small-header mb-10">
                      Integrasi Kalender
                    </h3>
                    <p class="primary-copy">
                      Sinkronisasi dengan kalendar 
                      untuk mengelola jadwal lebih efisien.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mb-30">
                <div class="small-features-card" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div class="icon">
                    <img src="images/icon_nc.png" alt="">
                  </div>
                  <div class="copy">
                    <h3 class="small-header mb-10">
                      Analisis Waktu
                    </h3>
                    <p class="primary-copy">
                      Lihat laporan harian dan bulanan 
                      tentang bagaimana kamu menggunakan waktu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      <!-- FAQ -->
      <section class="bsb-faq-3 py-3 py-md-5 py-xl-8">
        <div class="container">
            <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h3 class="medium-header mb-10 text-center" data-aos="fade-up" data-aos-duration="500">Pertanyaan Umum</h3>
                <p class="primary-copy mb-30 text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                Temukan jawaban pertanyaanmu di sini.
                </p>
            </div>
            </div>
        </div>
        <div class="mb-8">
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-11 col-xl-10">
                <div class="accordion accordion-flush" id="faqUtama">
                    <!-- FAQ Item 1 -->
                    <div class="accordion-item bg-transparent border-top border-bottom py-3" 
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
                    <h2 class="accordion-header" id="faqHeading1">
                        <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" 
                                type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" 
                                aria-expanded="false" aria-controls="faqCollapse1">
                        Bagaimana cara mendapatkan rekomendasi PTN?
                        </button>
                    </h2>
                    <div id="faqCollapse1" class="accordion-collapse collapse" aria-labelledby="faqHeading1">
                        <div class="accordion-body">
                        <p>Masukkan nilai tryout SNBT kamu pada fitur rekomendasi. Sistem akan menampilkan daftar PTN yang sesuai dengan profil nilaimu.</p>
                        </div>
                    </div>
                    </div>
                    
                    <!-- FAQ Item 2 -->
                    <div class="accordion-item bg-transparent border-bottom py-3" 
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay="250">
                    <h2 class="accordion-header" id="faqHeading2">
                        <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" 
                                type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" 
                                aria-expanded="false" aria-controls="faqCollapse2">
                        Apakah saya bisa membuat jadwal belajar sendiri?
                        </button>
                    </h2>
                    <div id="faqCollapse2" class="accordion-collapse collapse" aria-labelledby="faqHeading2">
                        <div class="accordion-body">
                        <p>Bisa. Gunakan fitur Kalender untuk menambah jadwal belajar sesuai kebutuhanmu.</p>
                        </div>
                    </div>
                    </div>
                    
                    <!-- FAQ Item 3 -->
                    <div class="accordion-item bg-transparent border-bottom py-3" 
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
                    <h2 class="accordion-header" id="faqHeading3">
                        <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" 
                                type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" 
                                aria-expanded="false" aria-controls="faqCollapse3">
                        Bagaimana cara menggunakan fitur Pomodoro Timer?
                        </button>
                    </h2>
                    <div id="faqCollapse3" class="accordion-collapse collapse" aria-labelledby="faqHeading3">
                        <div class="accordion-body">
                        <p>Pilih menu Pomodoro, atur durasi belajar dan istirahat sesuai kebutuhan, lalu mulai timer untuk meningkatkan fokus belajar.</p>
                        </div>
                    </div>
                    </div>
                    
                    <!-- FAQ Item 4 -->
                    <div class="accordion-item bg-transparent border-bottom py-3" 
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay="350">
                    <h2 class="accordion-header" id="faqHeading4">
                        <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" 
                                type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" 
                                aria-expanded="false" aria-controls="faqCollapse4">
                        Apakah aplikasi ini gratis?
                        </button>
                    </h2>
                    <div id="faqCollapse4" class="accordion-collapse collapse" aria-labelledby="faqHeading4">
                        <div class="accordion-body">
                        <p>Ya, seluruh fitur Pilih PTN dapat digunakan secara gratis oleh seluruh pengguna.</p>
                        </div>
                    </div>
                    </div>
                    
                    <!-- FAQ Item 5 -->
                    <div class="accordion-item bg-transparent border-bottom py-3" 
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay="400">
                    <h2 class="accordion-header" id="faqHeading5">
                        <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" 
                                type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" 
                                aria-expanded="false" aria-controls="faqCollapse5">
                        Bagaimana cara menghubungi tim Pilih PTN?
                        </button>
                    </h2>
                    <div id="faqCollapse5" class="accordion-collapse collapse" aria-labelledby="faqHeading5">
                        <div class="accordion-body">
                        <p>Kamu bisa mengisi form kontak di bagian bawah halaman ini, atau menghubungi kami melalui WhatsApp yang tersedia.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>

      <!-- Anggota Tim -->
      <section id="tim" class="tim mt-50">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-center">
                <h3 class="medium-header mb-10" data-aos="fade-up" data-aos-duration="500">Anggota Tim</h3>
                <p class="primary-copy mb-30" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">Dedikasi dan kolaborasi tim kami untuk memberikan yang terbaik</p>
            </div>
            </div>
            <div class="row justify-content-center">
            <!-- Card 1 -->
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <div class="team-card text-center p-4 bg-white rounded-4 shadow-sm">
                <div class="team-photo mb-3">
                    <img src="images/tim/febe1.jpg" alt="M. Alvian Ari Nugroho" class="img-fluid rounded-circle">
                </div>
                <h4 class="fw-bold mb-1">M. Alvian Ari Nugroho</h4>
                <div class="text-secondary mb-3">Web Developer</div>
                <div>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
            <!-- Card 2 -->
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                <div class="team-card text-center p-4 bg-white rounded-4 shadow-sm">
                <div class="team-photo mb-3">
                    <img src="images/tim/febe2.jpg" alt="M. Gilang Himawan" class="img-fluid rounded-circle">
                </div>
                <h4 class="fw-bold mb-1">M. Gilang Himawan</h4>
                <div class="text-secondary mb-3">Web Developer</div>
                <div>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
            <!-- Card 3 -->
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                <div class="team-card text-center p-4 bg-white rounded-4 shadow-sm">
                <div class="team-photo mb-3">
                    <img src="images/tim/febe3.jpg" alt="Moh. Kosim" class="img-fluid rounded-circle">
                </div>
                <h4 class="fw-bold mb-1">Moh. Kosim</h4>
                <div class="text-secondary mb-3">Web Developer</div>
                <div>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
            <!-- Card 4 -->
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <div class="team-card text-center p-4 bg-white rounded-4 shadow-sm">
                <div class="team-photo mb-3">
                    <img src="images/tim/ml1.jpg" alt="Rivaldy" class="img-fluid rounded-circle">
                </div>
                <h4 class="fw-bold mb-1">Rivaldy Arrayan Yuwono</h4>
                <div class="text-secondary mb-3">Machine Learning</div>
                <div>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
            <!-- Card 5 -->
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                <div class="team-card text-center p-4 bg-white rounded-4 shadow-sm">
                <div class="team-photo mb-3">
                    <img src="images/tim/ml2.jpg" alt="Adam" class="img-fluid rounded-circle">
                </div>
                <h4 class="fw-bold mb-1">Adam Havenia Pratama</h4>
                <div class="text-secondary mb-3">Machine Learning</div>
                <div>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
            <!-- Card 6 -->
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                <div class="team-card text-center p-4 bg-white rounded-4 shadow-sm">
                <div class="team-photo mb-3">
                    <img src="images/tim/ml3.jpg" alt="Zarifa" class="img-fluid rounded-circle">
                </div>
                <h4 class="fw-bold mb-1">Zarifa Ayyasy</h4>
                <div class="text-secondary mb-3">Machine Learning</div>
                <div>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-secondary me-3 fs-5"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>

      <!-- Kontak Kami -->
      <section id="kontak" class="booking mt-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h3 class="medium-header mb-10" data-aos="fade-up" data-aos-duration="500">
                Kontak Kami   
              </h3>
              <p class="primary-copy mb-30" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                Tidak perlu mikir lama, langsung coba dan rasain
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="row">
                <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-out">
                  <img src="images/illustration_booking.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 booking-form align-self-center">
                  <form id="wa-form">
                    <div class="mb-16" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-out">
                      <input placeholder="Nama Lengkap" type="text" name="name" class="form-control" required>
                    </div>
                    <div class="mb-16" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-out">
                      <input placeholder="Alamat Email" type="email" name="email_address" class="form-control" required>
                    </div>
                    <div class="mb-16" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-out">
                      <select name="tujuan" class="form-select" aria-label="Pilih tujuan" required>
                        <option value="" disabled selected>Pilih tujuanmu</option>
                        <option value="Meningkatkan Fokus">Meningkatkan Fokus</option>
                        <option value="Manajemen Tugas">Manajemen Tugas</option>
                        <option value="Optimasi Waktu">Optimasi Waktu</option>
                        <option value="Semangat Belajar">Semangat Belajar</option>
                      </select>
                    </div>
                    <div class="mb-30 data" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-out">
                      <textarea placeholder="tuliskan pesan anda" name="pesan" cols="30" rows="5" class="form-control" required></textarea>
                    </div>
                    <button class="w-100 btn btn-primary">Mulai Sekarang</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
    const form = document.getElementById('wa-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email_address"]').value;
      const tujuan = form.querySelector('select').value;
      const pesan = form.querySelector('textarea').value;

      const nomorWA = '6285231823145';
      const text = `Halo, saya ${name} (${email})%0ATujuan: ${tujuan}%0APesan: ${pesan}`;
      const url = `https://wa.me/${nomorWA}?text=${text}`;

      window.open(url, '_blank');
    });
  }
}

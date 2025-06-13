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
                <div class="col-lg-7" data-aos="flip-up"  data-aos-duration="1500" data-aos-easing="ease-in-out">
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
                        <h3 class="medium-header mb-10">
                            Fitur Utama
                        </h3>
                        <p class="primary-copy mb-30">
                            Sistem efisien meningkatkan semangat
                        </p>
                     </div>
                </div>

            <div class="row features-wrapper">
                <!-- left -->
                <div class="col-lg-7">
                    <div class="col-lg-12 mb-30">
                        <div class="big-features-card" data-aos="fade-fight" data-aos-duration="800" data-aos-easing="ease-in-out">
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
                        <div class="big-features-card" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">
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
                        <div class="small-features-card" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
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
                        <div class="small-features-card" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
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
                        <div class="small-features-card" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
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

     <!-- Tim -->
     <section id="tim" class="tim mt-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3 class="medium-header mb-10">
                        Tim Kami
                    </h3>
                    <p class="primary-copy mb-30">
                        Dedikasi dan kolaborasi tim kami untuk memberikan yang terbaik
                    </p>
                </div>
            </div>
            
            <div class="row">
            
                <!-- FEBE Team -->
                <div class="col-lg-4 mb-30" data-aos="fade-up" data-aos-duration="800">
                    <div class="team-card text-center">
                        <div class="team-photo mb-20">
                            <img src="images/tim/febe1.jpg" alt="Anggota FEBE 1" class="img-fluid rounded-circle">
                        </div>
                        <h4 class="small-header mb-5">M. Alvian Ari Nugroho</h4>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <div class="team-card text-center">
                        <div class="team-photo mb-20">
                            <img src="images/tim/febe2.jpg" alt="Anggota FEBE 2" class="img-fluid rounded-circle">
                        </div>
                        <h4 class="small-header mb-5">M. Gilang Himawan</h4>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div class="team-card text-center">
                        <div class="team-photo mb-20">
                            <img src="images/tim/febe3.jpg" alt="Anggota FEBE 3" class="img-fluid rounded-circle">
                        </div>
                        <h4 class="small-header mb-5">Moh. Kosim</h4>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <!-- ML Team -->
                <div class="col-lg-4 mb-30" data-aos="fade-up" data-aos-duration="800">
                    <div class="team-card text-center">
                        <div class="team-photo mb-20">
                            <img src="images/tim/ml1.jpg" alt="Anggota ML 1" class="img-fluid rounded-circle">
                        </div>
                        <h4 class="small-header mb-5">Rivaldy Arrayan Yuwono</h4>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <div class="team-card text-center">
                        <div class="team-photo mb-20">
                            <img src="images/tim/ml2.jpg" alt="Anggota ML 2" class="img-fluid rounded-circle">
                        </div>
                        <h4 class="small-header mb-5">Adam Havenia Pratama</h4>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div class="team-card text-center">
                        <div class="team-photo mb-20">
                            <img src="images/tim/ml3.jpg" alt="Anggota ML 3" class="img-fluid rounded-circle">
                        </div>
                        <h4 class="small-header mb-5">Zarifa Ayyasy</h4>
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
                    <h3 class="medium-header mb-10">
                        Kontak Kami   
                    </h3>
                    <p class="primary-copy mb-30">
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
                                <div class="mb-16">
                                    <input placeholder="Nama Lengkap" type="text" name="name" class="form-control" required>
                                </div>
                                <div class="mb-16">
                                    <input placeholder="Alamat Email" type="email" name="email_address" class="form-control" required>
                                </div>
                                <div class="mb-16">
                                    <select name="tujuan" class="form-select" required>
                                    <option value="" disabled selected>Pilih tujuanmu</option>
                                    <option value="Meningkatkan Fokus">Meningkatkan Fokus</option>
                                    <option value="Manajemen Tugas">Manajemen Tugas</option>
                                    <option value="Optimasi Waktu">Optimasi Waktu</option>
                                    <option value="Semangat Belajar">Semangat Belajar</option>
                                    </select>
                                </div>
                                <div class="mb-30 data">
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

      // Ganti nomor di bawah dengan nomor WhatsApp tujuan (format: 628xxxx)
      const nomorWA = '6285231823145';
      const text = `Halo, saya ${name} (${email})%0ATujuan: ${tujuan}%0APesan: ${pesan}`;
      const url = `https://wa.me/${nomorWA}?text=${text}`;

      window.open(url, '_blank');
    });
  }
}

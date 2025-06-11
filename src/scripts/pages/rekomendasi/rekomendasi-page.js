import RekomendasiPresenter from '../../pages/rekomendasi/rekomendasi-presenter';

export default class RekomendasiPage {
  async render() {
    return `
      <section class="container my-5">
      <h1 class="big-header mb-3 text-center">Rekomendasi PTN</h1>
      <div class="d-flex justify-content-center">
        <form id="rekomendasi-form" class="bg-white form-wrapper mx-auto mt-3 rounded-4 shadow-lg">
          <div class="d-flex justify-content-center mb-2">
            <div class="form-section-header rounded-top-3 fw-bold text-center py-3 px-2">
              Perkiraan Nilai UTBKmu
            </div>
          </div>

          <div class="form-body">
            <div class="mb-3">
              <label class="form-label">Penalaran Umum</label>
              <input type="number" class="form-control" name="penalaran_umum" placeholder="Masukkan Nilai" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Pengetahuan dan Pemahaman Umum</label>
              <input type="number" class="form-control" name="pemahaman_umum" placeholder="Masukkan Nilai" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Memahami Bacaan dan Penulisan</label>
              <input type="number" class="form-control" name="bacaan_penulisan" placeholder="Masukkan Nilai" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Kemampuan Kuantitatif</label>
              <input type="number" class="form-control" name="kuantitatif" placeholder="Masukkan Nilai" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Literasi dalam Bahasa Indonesia</label>
              <input type="number" class="form-control" name="literasi_indonesia" placeholder="Masukkan Nilai" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Literasi dalam Bahasa Inggris</label>
              <input type="number" class="form-control" name="literasi_inggris" placeholder="Masukkan Nilai" required>
            </div>
            <div class="mb-4">
              <label class="form-label">Penalaran Matematika</label>
              <input type="number" class="form-control" name="penalaran_matematika" placeholder="Masukkan Nilai"
                required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit Nilai</button>
          </div>
        </form>
      </div>

      <div id="hasil-rekomendasi" class="mt-5 d-none">
        <div class="d-flex justify-content-center">
          <div class="bg-white form-wrapper mx-auto rounded-4 shadow-lg">
            <div class="d-flex justify-content-center mb-2">
              <div class="form-section-header rounded-top-3 fw-bold text-center py-3 px-2">
                Hasil Rekomendasi:
              </div>
            </div>

            <div id="output-rekomendasi" class="p-4">
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }

  async afterRender() {
    this.presenter = new RekomendasiPresenter();
    this.presenter.setView(this);

    const form = document.getElementById('rekomendasi-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      this.presenter.submitForm(formData);
    });
  }

  showResult(result) {
    const hasilContainer = document.getElementById('hasil-rekomendasi');
    const output = document.getElementById('output-rekomendasi');
    hasilContainer.classList.remove('d-none');

    // List logo universitas
    const logoList = {
      'Universitas Gadjah Mada': '/images/logo-univ/Gajah mada.png',
      'Institut Teknologi Bandung': '/images/logo-univ/ITB.png',
      'Institut Teknologi Sepuluh Nopember': '/images/logo-univ/Lambang ITS.png',
      'Institut Pertanian Bogor': '/images/logo-univ/Logo IPB University_Vertical.png',
      'Universitas Islam Negeri Malang':
        '/images/logo-univ/Logo Uin Maulana Malik Ibrahim Malang Png, Transparent Png , Transparent Png Image - PNGitem.png',
      "UPN 'Veteran' Jakarta": '/images/logo-univ/LOGO UPNV Jakarta.png',
      'Universitas Brawijaya': '/images/logo-univ/UB.png',
      'Universitas Udayana': '/images/logo-univ/Udayana.png',
      'Universitas Islam Negeri Jakarta': '/images/logo-univ/UIN JKT.png',
      'Universitas Islam Negeri Sunan Gunung Djati': '/images/logo-univ/uin sunan gunung djati.png',
      'Universitas Islam Negeri Sunan Kalijaga': '/images/logo-univ/uin sunan kalijaga.png',
      'Universitas Negeri Surabaya': '/images/logo-univ/UNESA.png',
      'Universitas Airlangga': '/images/logo-univ/Universitas Airlangga.png',
      'Universitas Andalas': '/images/logo-univ/Universitas Andalas.png',
      'Universitas Bengkulu': '/images/logo-univ/universitas bengkulu.PNG',
      'Universitas Cenderawasih': '/images/logo-univ/universitas cendrawasih.PNG',
      'Universitas Diponegoro': '/images/logo-univ/Universitas Diponegoro.png',
      'Universitas Haluoleo': '/images/logo-univ/Universitas haluoleo.png',
      'Universitas Hasanuddin': '/images/logo-univ/Universitas Hasanudin.png',
      'Universitas Indonesia': '/images/logo-univ/Universitas Indonesia.png',
      'Universitas Islam Negeri Alauddin': '/images/logo-univ/Universitas islam alauddin.png',
      'Universitas Jambi': '/images/logo-univ/universitas jambi.PNG',
      'Universitas Jember': '/images/logo-univ/Universitas Jember.png',
      'Universitas Jenderal Soedirman': '/images/logo-univ/Universitas Jendral Sudirman.png',
      'Universitas Lambung Mangkurat': '/images/logo-univ/universitas lambung mangkurat.PNG',
      'Universitas Lampung': '/images/logo-univ/UNIVERSITAS LAMPUNG.PNG',
      'Universitas Malikussaleh': '/images/logo-univ/universitas malikusaleh.PNG',
      'Universitas Mataram': '/images/logo-univ/UNIVERSITAS MATARAM.PNG',
      'Universitas Mulawarman': '/images/logo-univ/universitas mulawarman.png',
      'Universitas Negeri Jakarta': '/images/logo-univ/universitas negeri jakarta.PNG',
      'Universitas Negeri Malang': '/images/logo-univ/Universitas Negeri Malang.png',
      'Universitas Negeri Semarang': '/images/logo-univ/Universitas Negeri Semarang.png',
      'Universitas Nusa Cendana': '/images/logo-univ/universitas nusa cendana.PNG',
      'Universitas Padjadjaran': '/images/logo-univ/Universitas Pajajaran.png',
      'Universitas Palangkaraya': '/images/logo-univ/universitas palangka.png',
      'Universitas Pattimura': '/images/logo-univ/Universitas pattimura.png',
      'Universitas Pendidikan Ganesha': '/images/logo-univ/universitas pendidikan ganesha.PNG',
      'Universitas Pendidikan Indonesia': '/images/logo-univ/universitas pendidikan indonesia.PNG',
      'Universitas Riau': '/images/logo-univ/universitas riau.PNG',
      'Universitas Sam Ratulangi': '/images/logo-univ/universitas samratulangi.PNG',
      'Universitas Sriwijaya': '/images/logo-univ/Universitas Sriwijaya.png',
      'Universitas Sumatera Utara': '/images/logo-univ/Universitas Sumatra Utara.png',
      'Universitas Tadulako': '/images/logo-univ/Universitas tadulako.PNG',
      'Universitas Tanjungpura': '/images/logo-univ/universitas tanjungpura.PNG',
      'Universitas Tidar': '/images/logo-univ/Universitas Tidar.png',
      'Universitas Sebelas Maret': '/images/logo-univ/UNS.png',
      'Universitas Syiah Kuala': '/images/logo-univ/unsiyah.png',
      'Universitas Negeri Yogyakarta': '/images/logo-univ/UNY.PNG',
      'Universitas Veteran Jawa Timur': '/images/logo-univ/upn veteran jawa timur.PNG',
      'Universitas Veteran Yogyakarta': '/images/logo-univ/UPN Yogyakarta.PNG',
    };

    let html = '';

    if (result.prediction) {
      html += `<div class="row justify-content-center">`;
      result.prediction.forEach((ptn) => {
        const normalizedKey = ptn.toLowerCase();
        const logoEntry = Object.entries(logoList).find(
          ([key]) => key.toLowerCase() === normalizedKey,
        );
        const logo = logoEntry ? logoEntry[1] : '/images/logo-univ/default.png';
        html += `
          <div class="col-md-3 text-center mb-4">
            <img src="${logo}" alt="${ptn}" class="img-fluid mb-2" style="max-height: 100px;">
            <div><strong>${ptn}</strong></div>
          </div>
        `;
      });
      html += `</div>`;
    }

    if (result.message) {
      html += `<p><strong>Saran Belajar:</strong></p><ul>`;
      result.message.forEach((s) => {
        html += `<li>${s}</li>`;
      });
      html += `</ul>`;
    }

    output.innerHTML = html;
  }

  showError(message) {
    const hasilContainer = document.getElementById('hasil-rekomendasi');
    const output = document.getElementById('output-rekomendasi');
    hasilContainer.classList.remove('d-none');
    output.innerHTML = `<p class="text-danger">${message}</p>`;
  }
}

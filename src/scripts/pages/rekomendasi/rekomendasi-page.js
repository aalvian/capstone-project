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
                <input type="number" class="form-control" name="penalaran_matematika" placeholder="Masukkan Nilai" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Submit Nilai</button>
            </div>
          </form>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById('rekomendasi-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Nilai berhasil disubmit!');
    });
  }
}

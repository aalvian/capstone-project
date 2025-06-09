export default class RekomendasiPresenter {
  setView(view) {
    this.view = view;
  }

  async submitForm(formData) {
    const payload = {
      PU: parseFloat(formData.get('penalaran_umum')),
      PBM: parseFloat(formData.get('pemahaman_umum')),
      PPU: parseFloat(formData.get('bacaan_penulisan')),
      PK: parseFloat(formData.get('kuantitatif')),
      BIndo: parseFloat(formData.get('literasi_indonesia')),
      BIng: parseFloat(formData.get('literasi_inggris')),
      PM: parseFloat(formData.get('penalaran_matematika')),
    };

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      this.view.showResult(result);
    } catch (error) {
      this.view.showError('Terjadi kesalahan saat memproses data.');
      console.error(error);
    }
  }
}

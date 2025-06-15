import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // Add this import
import TargetBelajarPresenter from '../target-belajar/targetBelajar-presenter.js';
import Database from '../../data/database.js';

export default class TargetBelajarPage {
  #presenter;

  async render() {
    return `
      <section id="dashboard" class="header mt-40" style="position: relative;">
        <div class="container">
          <h1 class="big-header mb-3 text-center">Target Belajar</h1>

          <div class="row mt-40 calender">
            <div id="loadingSpinner" class="spinner" style="display: none;"></div>
            <div id="calendar"></div>

            <!-- Popup Tambah Event -->
            <div id="eventPopup" style="display: none;">
              <h3>Tambahkan Target Belajar</h3>
              <form id="eventForm">
                <label for="eventTitle">Judul</label>
                <input type="text" id="eventTitle" placeholder="Judul" required />
                <div class="date-row">
                  <div>
                    <label for="startDate">Tanggal Mulai</label>
                    <input type="date" id="startDate" required />
                  </div>
                  <div>
                    <label for="endDate">Tanggal Selesai</label>
                    <input type="date" id="endDate" required />
                  </div>
                </div>
                <label for="eventDescription">Deskripsi</label>
                <textarea id="eventDescription" rows="4" required></textarea>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px;">
                  <button type="button" onclick="closePopup()">Batal</button>
                  <button type="submit">Simpan</button>
                </div>
              </form>
            </div>

            <!-- Popup Detail Event -->
            <div id="eventDetailPopup" style="display: none;">
              <div class="popup-header">
                <h3>Detail Target Belajar</h3>
              </div>
              <div class="popup-body">
                <p><strong>Judul :</strong> <span id="detailTitle"></span></p>
                <p><strong>Tanggal Mulai :</strong> <span id="detailStart"></span></p>
                <p><strong>Tanggal Selesai :</strong> <span id="detailEnd"></span></p>
                <p><strong>Deskripsi :</strong> <span id="detailDescription"></span></p>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px;">
                  <button type="button" onclick="closeEventDetailPopup()">Tutup</button>
                </div>
              </div>
            </div>

            <!-- Popup Edit Event -->
            <div id="editEventPopup" style="display: none;">
              <h3>Edit Target Belajar</h3>
              <form id="editEventForm">
                <input type="hidden" id="editEventId">
                <label for="editEventTitle">Judul</label>
                <input type="text" id="editEventTitle" placeholder="Judul" required />
                <div class="date-row">
                  <div>
                    <label for="editStartDate">Tanggal Mulai</label>
                    <input type="date" id="editStartDate" required />
                  </div>
                  <div>
                    <label for="editEndDate">Tanggal Selesai</label>
                    <input type="date" id="editEndDate" required />
                  </div>
                </div>
                <label for="editEventDescription">Deskripsi</label>
                <textarea id="editEventDescription" rows="4" required></textarea>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px;">
                  <button type="button" onclick="closeEditForm()">Batal</button>
                  <button type="submit">Simpan Perubahan</button>
                </div>
              </form>
            </div>

            <!-- Toast Notifikasi -->
            <div class="position-fixed top-0 end-0 p-3" style="z-index: 1055">
              <div id="successToast" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                  <div class="toast-body">
                    Target berhasil ditambahkan!
                  </div>
                  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
              </div>
              <div id="errorToast" class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                  <div class="toast-body">
                    Semua form wajib diisi!
                  </div>
                  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new TargetBelajarPresenter({ dbModel: Database });
    await this.fullCalendar();
  }

  async fullCalendar() {
    const spinner = document.getElementById('loadingSpinner');
    const calendarEl = document.getElementById('calendar');

    spinner.style.display = 'block';

    const events = await this.#presenter.getAllEvents();

    spinner.style.display = 'none';

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, listPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      aspectRatio: 1.5,
      headerToolbar: {
        left: 'dayGridMonth,listWeek,addEventButton',
        center: 'title',
        right: 'today prev,next',
      },
      customButtons: {
        addEventButton: {
          text: 'tambah target',
          click: () => { // Changed to arrow function to maintain 'this' context
            this.#clearForm(); // Clear form when button is clicked
            window.openPopup();
          },
        },
      },
      events: events.map((event) => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: this.#adjustEndDate(event.end),
        allDay: true,
        extendedProps: {
          description: event.description,
        },
      })),
      dateClick: (info) => {
        const clickedDate = info.dateStr;
        document.getElementById('startDate').value = clickedDate;
        document.getElementById('endDate').value = clickedDate;
        window.openPopup();
      },
      eventClick: (info) => {
        this.#currentEventId = info.event.id;
        document.getElementById('detailTitle').textContent = info.event.title;
        document.getElementById('detailStart').textContent = this.#formatDate(info.event.start);
        document.getElementById('detailEnd').textContent = info.event.end ? 
          this.#formatDate(info.event.end) : this.#formatDate(info.event.start);
        document.getElementById('detailDescription').textContent =
          info.event.extendedProps.description || '-';
        document.getElementById('eventDetailPopup').style.display = 'block';
      },
    });

    calendar.render();

    // Form submission
    document.getElementById('eventForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const title = document.getElementById('eventTitle').value.trim();
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const description = document.getElementById('eventDescription').value.trim();

      if (!title || !startDate || !endDate || !description) {
        const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
        errorToast.show();
        return;
      }

      const newEvent = await this.#presenter.addEvent({
        title,
        start: startDate,
        end: endDate,
        description,
      });

      calendar.addEvent({
        id: newEvent.id,
        title: newEvent.title,
        start: newEvent.start,
        end: this.#adjustEndDate(newEvent.end),
        allDay: true,
        extendedProps: {
          description: newEvent.description,
        },
      });

      const successToast = new bootstrap.Toast(document.getElementById('successToast'));
      successToast.show();

      this.#clearForm();
      window.closePopup();
    });

    // Form submission for edit event
    document.getElementById('editEventForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const id = document.getElementById('editEventId').value;
      const title = document.getElementById('editEventTitle').value.trim();
      const startDate = document.getElementById('editStartDate').value;
      const endDate = document.getElementById('editEndDate').value;
      const description = document.getElementById('editEventDescription').value.trim();

      if (!title || !startDate || !endDate || !description) {
        const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
        errorToast.show();
        return;
      }

      const updatedEvent = {
        id: parseInt(id),
        title,
        start: startDate,
        end: endDate,
        description
      };

      const successToast = new bootstrap.Toast(document.getElementById('successToast'));
      successToast.show();

      window.closeEditForm();
      window.closeEventDetailPopup();
    });

    // Global popup functions
    window.openPopup = () => {
      document.getElementById('eventPopup').style.display = 'block';
    };
    window.closePopup = () => {
      document.getElementById('eventPopup').style.display = 'none';
    };
    window.closeEventDetailPopup = () => {
      document.getElementById('eventDetailPopup').style.display = 'none';
    };
  }

  #currentEventId = null;

  #clearForm() {
    document.getElementById('eventTitle').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('eventDescription').value = '';
  }

  #adjustEndDate(dateStr) {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  }

  #formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
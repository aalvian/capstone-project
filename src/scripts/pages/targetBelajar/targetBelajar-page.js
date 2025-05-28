import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import TargetBelajarPresenter from '../targetBelajar/targetBelajar-presenter.js';
import Database from '../../data/database';

export default class TargetBelajarPage {
  #presenter;

  async render() {
    return `
      <section id="dashboard" class="header mt-40" style="position: relative;">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 copywriting align-self-center" data-aos="fade-up" data-aos-duration="800"
              data-aos-easing="ease-in-out">
              <h1 class="big-header mb-20">Target Belajar</h1>
            </div>
          </div>
          <div class="row mt-40 calender">
            <div id="loadingSpinner" class="spinner" style="display: none;"></div>
            <div id="calendar"></div>

            <!-- Popup Tambah Event -->
            <div id="eventPopup" style="display: none;">
              <h3>Tambahkan Target Belajar</h3>
              <form id="eventForm">
                <label for="eventTitle">Titel</label>
                <input type="text" id="eventTitle" placeholder="Title" required />
                <div class="date-row">
                  <div>
                    <label for="startDate">Start-date</label>
                    <input type="date" id="startDate" required />
                  </div>
                  <div>
                    <label for="endDate">End-date</label>
                    <input type="date" id="endDate" required />
                  </div>
                </div>
                <label for="eventDescription">Deskripsi</label>
                <textarea id="eventDescription" rows="4" required></textarea>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px;">
                  <button type="button" onclick="closePopup()">Cancel</button>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>

            <!-- Popup Detail Event -->
            <div id="eventDetailPopup" style="display: none;">
              <div class="popup-header">
                <h3>View Event</h3>
              </div>
              <div class="popup-body">
                <p><strong>Titel :</strong> <span id="detailTitle"></span></p>
                <p><strong>Start-date :</strong> <span id="detailStart"></span></p>
                <p><strong>End-date :</strong> <span id="detailEnd"></span></p>
                <p><strong>Deskripsi :</strong> <span id="detailDescription"></span></p>
                <button type="button" onclick="closeEventDetailPopup()">Cancel</button>
              </div>
            </div>

            <!-- Toast Success -->
            <div class="position-fixed top-0 end-0 p-3" style="z-index: 1055">
              <div id="successToast" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                  <div class="toast-body">
                    Event berhasil ditambahkan!
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
      plugins: [dayGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'dayGridMonth,listWeek,addEventButton',
        center: 'title',
        right: 'today prev,next',
      },
      customButtons: {
        addEventButton: {
          text: 'Add Event',
          click: function () {
            window.openPopup();
          },
        },
      },
      events: events.map(event => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: this.#adjustEndDate(event.end),
        allDay: true,
        extendedProps: {
          description: event.description,
        },
      })),
      eventClick: function (info) {
        document.getElementById('detailTitle').textContent = info.event.title;
        document.getElementById('detailStart').textContent = info.event.startStr;
        document.getElementById('detailEnd').textContent = info.event.endStr || info.event.startStr;
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

      const newEvent = await this.#presenter.addEvent({ title, start: startDate, end: endDate, description });

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

      e.target.reset();
      window.closePopup();
    });

    // Global popup functions
    window.openPopup = function () {
      document.getElementById('eventPopup').style.display = 'block';
    };
    window.closePopup = function () {
      document.getElementById('eventPopup').style.display = 'none';
    };
    window.closeEventDetailPopup = function () {
      document.getElementById('eventDetailPopup').style.display = 'none';
    };
  }

  #adjustEndDate(dateStr) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + 1); // Tambah 1 hari
    return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
  }
}

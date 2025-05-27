import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import TargetBelajarPresenter from '../targetBelajar/targetBelajar-presenter.js';

export default class TargetBelajarPage {

  constructor() {
    this.presenter = new TargetBelajarPresenter();
  }
  async render() {
    return `
      <section id="dashboard" class="header mt-40">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 copywriting align-self-center" data-aos="fade-up" data-aos-duration="800"
              data-aos-easing="ease-in-out">
              <h1 class="big-header mb-20">Target Belajar</h1>
            </div>
          </div>
          <div class="row mt-40 calender">
            <div id='calendar'></div>

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
                <textarea id="eventDescription" rows="4"></textarea>
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

          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.fullCalendar();
  }

  fullCalendar() {
    const calendarEl = document.getElementById('calendar');
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
      events: this.presenter.getAllEvents(),
      eventClick: function(info) {
        document.getElementById('detailTitle').textContent = info.event.title;
        document.getElementById('detailStart').textContent = info.event.startStr;
        document.getElementById('detailEnd').textContent = info.event.endStr || info.event.startStr;
        document.getElementById('detailDescription').textContent = info.event.extendedProps.description || '-';
        document.getElementById('eventDetailPopup').style.display = 'block';
      }
    });

    calendar.render();

    // Tambah event dari form
    document.getElementById('eventForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const title = document.getElementById('eventTitle').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const description = document.getElementById('eventDescription').value;

      if (title && startDate && endDate) {
        const eventData = { title, start: startDate, end: endDate, description };
        this.presenter.addEvent(eventData);
        calendar.addEvent({
          title: title,
          start: startDate,
          end: endDate,
          allDay: true,
          extendedProps: {
            description: description,
          },
        });
      }

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
}

export default class TargetBelajarPresenter {
  constructor() {
    // Simulasi database lokal. Bisa diganti dengan API atau LocalStorage.
    this.events = [
      {
        title: 'Belajar JavaScript',
        start: '2025-05-25',
        end: '2025-05-26',
        allDay: true,
        description: 'Menyelesaikan modul dasar JavaScript',
      },
    ];
  }


  getAllEvents() {
    return this.events.map((event) => ({
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: true,
      extendedProps: {
        description: event.description || '-',
      },
    }));
  }


  addEvent(eventData) {
    this.events.push({
      title: eventData.title,
      start: eventData.start,
      end: eventData.end,
      allDay: true,
      description: eventData.description || '-',
    });
  }
}

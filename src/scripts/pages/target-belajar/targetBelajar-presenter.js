export default class TargetBelajarPresenter {
  #dbModel;

  constructor({ dbModel }) {
    this.#dbModel = dbModel;
  }

  async addEvent(eventData) {
    const id = +new Date();
    const newEvent = { id, ...eventData };
    await this.#dbModel.putReport(newEvent);
    return newEvent;
  }

  async getAllEvents() {
    return await this.#dbModel.getAllReports();
  }
}

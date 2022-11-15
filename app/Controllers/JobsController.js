import { appState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawJobs() {
  let template = "";
  appState.jobs.forEach((j) => (template += j.JobTemplate));
  setHTML("listings", template);
}

function _drawJobsForm() {}

export class JobsController {
  constructor() {
    this.getJobs();
  }
  async getJobs() {
    try {
      await jobsService.getJobs();
    } catch (error) {
      Pop.toast("error", error);
      console.log(error);
    }
  }
  showJobs() {
    _drawJobs();
    _drawJobsForm();
  }
  apply() {
    Pop.error("Unqualified");
  }
}

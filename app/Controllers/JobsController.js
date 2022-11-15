import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawJobs() {
  console.log("draws are connected");
}

function _drawJobsForm() {
  console.log("draws are connected");
}

export class JobsController {
  constructor() {
    console.log("controller is working");
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
    this.getJobs();
    _drawJobs();
    _drawJobsForm();
  }
}

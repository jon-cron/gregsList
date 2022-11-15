import { jobsService } from "../Services/JobsService.js";

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
  showJobs() {
    _drawJobs();
    _drawJobsForm();
  }
}

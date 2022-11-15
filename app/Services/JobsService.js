import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
  async getJobs() {
    const res = await axios.get("https://bcw-sandbox.herokuapp.com/api/jobs");
    // console.log(res.data);
    appState.jobs = res.data.map((j) => new Job(res.data));
    // console.log(appState.jobs);
  }
}

export const jobsService = new JobsService();

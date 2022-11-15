export class Job {
  constructor(data) {
    this.jobTitle = data.jobTitle;
    this.company = data.company;
    this.rate = data.rate;
    this.hours = data.hours;
    this.description = data.description;
    this.id = data.id;
  }
  get JobTemplate() {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
    <div class="card card-details p-1 d-flex justify-content-evenly">
      <h1 class="text-center" >Job: ${this.jobTitle}</h1>
      <h4 class="text-center" >Company: ${this.company}</h4>
      <div>
        <h5>Hourly: ${this.rate}</h5>
        <h5>Weekly Hours: ${this.hours}</h5>
        <h4>Estimated weekly total: $${this.rate * this.hours}</h4>
      </div>
      <p>${this.description}</p>
      <button class="btn btn-primary" onclick= "app.jobsController.apply()" >Apply Now!</button>
    </div>
  </div>
    `;
  }
}

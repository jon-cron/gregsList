export class Job {
  constructor(data) {
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
  }
  get JobTemplate() {
    return `
    <div><h1>${this.jobTitle}</h1></div>
    `;
  }
}

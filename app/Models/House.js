export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms || "";
    this.bathrooms = data.bathrooms || "";
    this.levels = data.levels || "";
    this.imgUrl = data.imgUrl || "";
    this.price = data.price || "";
    this.description = data.description || "";
    this.year = data.year || "";
    this.id = data.id;
  }
  get HouseListTemplate() {
    return `
    <div class="col-4 p-4">
            <div class="card">
              <img
                src="${this.imgUrl}"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-between mb-2">
                  <span>${this.description}</span>
                  <span>${this.price}</span>
                  <span>${this.bedrooms}</span>
                  <span>${this.bathrooms}</span>
                </h5>
                <button onclick="app.housesController.setActiveHouse('${this.id}')" class="btn btn-primary">
            See Details
            </button>
            <button  class="btn btn-info"  onclick="app.housesController.setActive('${this.id}')">
            <i class="mdi mdi-pencil"></i>
            </button>
            <button onclick="app.housesController.removeHouse('${this.id}')" title="Delete car!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
              </div>
            </div>
          </div>
    `;
  }
  static GetHouseFormTemplate(house) {
    if (!house) {
      house = new House({}); // this house will be empty and not fill out the form
    }
    return `
    <form onsubmit="app.housesController.${
      house.id ? `editHouse('${house.id}')` : "createHouse()"
    }">
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="" placeholder="Number of Beds" name="bedrooms" value="${
          house.bedrooms
        }">
        <label for="house-model" >Beds</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="" placeholder="Number of Baths" name="bathrooms" value="${
          house.bathrooms
        }">
        <label for="house-model" >Baths</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="url" class="form-control" id="house-img" placeholder="Image" name="imgUrl" value="${
          house.imgURL
        }">
        <label for="house-img">Image</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="house-price" placeholder="Price" name="price" value="${
          house.price
        }">
        <label for="house-price">Price</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="house-year" placeholder="Year" name="year" value="${
          house.year
        }">
        <label for="house-year">Year</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="house-levels" placeholder="Levels" name="levels" value="${
          house.levels
        }">
        <label for="house-levels">Levels</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a description here" id="description"
          name="description" >${house.description}</textarea>
        <label for="description">Description</label>
      </div>
      <button type="submit" class="btn btn-success mt-3">Submit</button>
      <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
    </form>
    `;
  }
}

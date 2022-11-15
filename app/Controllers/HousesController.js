import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  let template = "";
  appState.houses.forEach((h) => (template += h.HouseListTemplate));
  setHTML("listings", template);
}
function _drawHouseForm() {
  let house = appState.activeHouse;
  setHTML("listing-form", House.GetHouseFormTemplate(house));
}

export class HousesController {
  constructor() {
    this.getHouses();
    appState.on("houses", _drawHouses);
    _drawHouses();
    _drawHouseForm();
  }
  async getHouses() {
    try {
      await housesService.getHouses();
    } catch (error) {
      Pop.toast(error);
    }
  }
  setActive(id) {
    console.log(id);
  }
  setActiveHouse(id) {
    console.log(id);
  }
  async removeHouse(id) {
    try {
      console.log("deleting", id);
      if (
        await Pop.confirm(
          "Are you sure?",
          "Someone spent a lot of time browsing the internet for that perfect picture",
          "yeah toss it",
          "warning"
        )
      ) {
        await housesService.removeHouse(id);
      }
    } catch (error) {
      Pop.error(error.message);
      console.error(error);
    }
  }
  async createHouse() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let houseData = getFormData(form);
      console.log(houseData);
      form.reset();
      await housesService.createHouse(houseData);
    } catch (error) {
      Pop.toast(error);
      console.log("error", error);
    }
  }
  showHouses() {
    _drawHouseForm();
    _drawHouses();
  }
}

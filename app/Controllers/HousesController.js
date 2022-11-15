import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
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
  removeHouse(id) {
    console.log("remove", id);
  }
  showHouses() {
    console.log("i work");
  }
}

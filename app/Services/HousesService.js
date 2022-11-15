import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  async getHouses() {
    const res = await axios.get("https://bcw-sandbox.herokuapp.com/api/houses");
    // console.log("Got houses", res.data);
    appState.houses = res.data.map((h) => new House(h));
    console.log("houses added to appState", appState.houses);
  }
}

export const housesService = new HousesService();

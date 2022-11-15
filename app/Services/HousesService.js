import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  async getHouses() {
    const res = await axios.get("https://bcw-sandbox.herokuapp.com/api/houses");
    // console.log("Got houses", res.data);
    appState.houses = res.data.map((h) => new House(h));
    console.log("houses added to appState", appState.houses);
  }
  async createHouse(houseData) {
    const res = await axios.post(
      "https://bcw-sandbox.herokuapp.com/api/houses",
      houseData
    );
    appState.houses = [...appState.houses, new House(res.data)];
  }
  async removeHouse(id) {
    const res = await axios.delete(
      "https://bcw-sandbox.herokuapp.com/api/houses/" + id
    );
    console.log("This house was remove:", res.data);
    appState.houses = appState.houses.filter((h) => h.id != id);
  }
}

export const housesService = new HousesService();

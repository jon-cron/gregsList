import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";

class App {
  housesController = new HousesController();
  carsController = new CarsController();
}

window["app"] = new App();

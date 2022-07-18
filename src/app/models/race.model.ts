import { CarsModel } from "./car.model";

export interface RaceModel {
    id: number;
    name: string;
    startInstant: string;
    cars: Array<CarsModel>;
}
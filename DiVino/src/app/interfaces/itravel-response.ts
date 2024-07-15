import { IWinery } from "./iwinery";

export interface ITravelResponse {

  id: number;
  winery: IWinery; // Assicurati che sia un numero
  travelPackageName: string;
  imageUrl?: string;
  startDate: Date;
  endDate: Date;
  price: number;
}

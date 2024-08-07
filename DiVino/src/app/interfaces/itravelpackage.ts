import { IWinery } from "./iwinery";

export interface ITravelpackage {
  id: number;
  wineryId: IWinery; // Assicurati che sia un numero
  travelPackageName: string;
  imageUrl?: string;
  startDate: Date;
  endDate: Date;
  price: number;
}

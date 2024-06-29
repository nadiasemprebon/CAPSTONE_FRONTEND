import { IWinery } from "./iwinery";


export interface ITravelpackage {
  id:number,
  wineryId: IWinery;
  travelPackageName: string;
  //imageUrl?: string;
  startDate: Date;
  endDate: Date;
  price: number;
}

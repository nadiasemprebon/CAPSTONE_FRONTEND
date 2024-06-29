import { ITravelpackage } from "./itravelpackage";

export interface IWinery {
  id: number;
  wineryName: string;
  location: string;
  description: string;
  tastingExperience: string;
  travelPackages?: ITravelpackage[];  // relazione uno-a-molti opzionale
}

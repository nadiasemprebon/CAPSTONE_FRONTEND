export interface ITravelpackage {
  id: number;
  wineryId: number; // Assicurati che sia un numero
  travelPackageName: string;
  imageUrl?: string;
  startDate: Date;
  endDate: Date;
  price: number;
}

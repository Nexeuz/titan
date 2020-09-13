

export interface Car {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16?: string | null;
  17: string;
  18: string;
  itemid: string;
  idescription: string;
  u_units: string;
  isale: string;
  insurb: string;
  insurf: string;
  icurrency: string;
  cseats: string;
  cfuel: string;
  luggage: string;
  minage: string;
  idpclass: string;
  gpstype: string;
  clang: string;
  cargroup: string;
  tdescription: string;
  image?: string | null;
  features: string;
  stock: string;
}


export function createGetCar(params: Partial<Car>) {
  return {

  } as Car;
}




export interface Car {
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


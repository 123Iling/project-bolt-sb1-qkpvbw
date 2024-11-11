export interface Subject {
  code: string;
  name: string;
  units: number;
  schedule?: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
  office?: string;
  subjects?: Subject[];
  children?: Employee[];
}
export interface Filter {
  id: number;
  name: string;
  type: 'range' | 'multiple';
  values?: (ValuesEntity | null)[] | null;
}
export interface ValuesEntity {
  id: number;
  value: string;
  checked?: boolean;
}



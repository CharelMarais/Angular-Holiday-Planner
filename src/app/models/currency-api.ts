export interface ICurrencyObject {
  meta: Meta;
  data: IConversionData;
}

export interface IConversionData {
  code: string;
  value: number;
}

interface Meta {
  last_updated_at: string;
}

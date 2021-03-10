import { Item } from './Item';

export class Order {
  public TotalWithTax: number;
  public TotalTaxFree: number;
  public ItemsOrder: Item[];
  public ItemAmount: number;
}

import { Identifiers } from '@angular/compiler';
import { Item } from './Item';

export class Order {
  public Id: string;
  public TotalWithTax: number;
  public TotalTaxFree: number;
  public Total: number;
  public Items: Item[];
  public ItemAmount: number;
  public EstablishmentId: string;
}

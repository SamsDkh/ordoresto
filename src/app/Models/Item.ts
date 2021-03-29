import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';

export class Item {
  productId: string;
  name: string;
  price: number;
  description: string;
  serving: string;
  cooking: string;
  energy: string;
  ingredients: string[];
  options: string[];
  type: ItemTypeEnum;
  img: string;
  vid: string;
  amount: number;
  establishmentId: string;
  typeName: string;
}

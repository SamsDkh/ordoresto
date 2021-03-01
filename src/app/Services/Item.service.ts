import { Injectable } from '@angular/core';
import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';
import { Item } from '../Models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: '0',
      name: 'Cream Pancake',
    price: 12.00,
    type: ItemTypeEnum.dessert,
    description: 'Lorepm esum....',
  cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '2',
img: 'assets/images/1.png',
vid: '',
amount: 0},
{
  id: '1',
  name: 'White Source Pasta',
price: 8.00,
type: ItemTypeEnum.main,
description: 'Lorepm esum....',
cooking: '1',
energy: '280',
ingredients: ['feu', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '2',
img: 'assets/images/2.png',
vid: '',
amount: 0},
{
  id: '2',
  name: 'Farm Villa Pizza',
price: 12.00,
type: ItemTypeEnum.starter,
description: 'Lorepm esum....',
cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '3',
img: 'assets/images/3.png',
vid: '',
amount: 0},
{
  id: '3',
  name: 'Couscous',
price: 12.00,
type: ItemTypeEnum.main,
description: 'Lorepm esum....',
cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '5',
img: 'assets/images/4.png',
vid: '',
amount: 0},
{
  id: '4',
  name: 'CocaCola',
price: 12.00,
type: ItemTypeEnum.beverage,
description: 'Lorepm esum....',
cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '1',
img: 'assets/images/5.png',
vid: '',
amount: 0},
{
  id: '5',
  name: 'Orangina',
price: 12.00,
type: ItemTypeEnum.beverage,
description: 'Lorepm esum....',
cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '8',
img: 'assets/images/5.png',
vid: '',
amount: 0}
  ];


constructor() {
 }


public getItems(): Item[]{
  return this.items;
 }


}

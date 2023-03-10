import {Card} from './Card';

export class Stage {

  private id: number;
  private name: string;
  private cards: Card[];

  constructor(id: number, name: string, cards: Card[]) {
    this.id = id;
    this.name = name;
    this.cards = cards;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }

  public getCards(): Card[] {
    return this.cards;
  }

}

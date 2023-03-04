import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Card} from '../../model/Card';
import {Stage} from '../../model/Stage';

@Component({
  selector: 'app-kanban-stage',
  templateUrl: './kanban-stage.component.html',
  styleUrls: ['./kanban-stage.component.css']
})
export class KanbanStageComponent implements OnInit {

  // We're using the non-null assertion operator ! after the @Input() decorator to tell TypeScript that we guarantee that stage will be initialized before it's used.
  // @Input() stage!: Stage;

  // Or we can just do it old-fashioned way and initialize it with a default/fake values
  @Input() stage: Stage = new Stage(0, '', []);
  @Output() onCardSelection: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.stage);
  }

  onCardSelected(card: Card): void {
    this.onCardSelection.emit(card);
  }

}

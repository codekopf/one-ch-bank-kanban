import { Component, OnInit } from '@angular/core';
import {Card} from '../model/Card';
import {Stage} from '../model/Stage';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  taskCounter = 0;

  stages: Stage[] = [
    new Stage(1, 'Backlog', []),
    new Stage(2, 'To Do', []),
    new Stage(3, 'Ongoing', []),
    new Stage(4, 'Done', [])
  ];

  taskNew: string = '';
  taskSelected: string = ''; // TODO rework to CardSelected

  constructor() { }

  ngOnInit() {
  }

  onAddCard() {
    if (this.taskNew.trim()) {
      this.stages[0].addCard(
        new Card(this.taskCounter++, this.taskNew)
      );
      this.taskNew = '';
    }
  }

  onCardSelect(data: any) { // TODO cast to Card
    this.taskSelected = data.getName();
  }

  onMoveBackCard() {
    this.moveTask(-1);
  }

  onMoveForwardCard() {
    this.moveTask(1);
  }

  moveTask(direction: number) {
    let currentStageIndex = this.getCurrentStageIndex();
    if ((direction === -1 && currentStageIndex === 0) || (direction === 1 && currentStageIndex === this.stages.length - 1)) {
      return;
    }
    let currentStageCards = this.stages[currentStageIndex].getCards();
    let index = currentStageCards.findIndex(card => card.getName() === this.taskSelected);
    let card = currentStageCards[index];
    if (index !== -1) {
      currentStageCards.splice(index, 1);
      let newStageIndex = currentStageIndex + direction;
      if (newStageIndex >= 0 && newStageIndex < this.stages.length) {
        this.stages[newStageIndex].getCards().push(card);
      } else {
        this.taskSelected = '';
      }
    }
  }

  getCurrentStageIndex() {
    for (let i = 0; i < this.stages.length; i++) {
      let index = this.stages[i].getCards().findIndex(card => card.getName() === this.taskSelected);
      if (index !== -1) {
        return i;
      }
    }
    return -1;
  }

  onDeleteCard() {
    for (let i = 0; i < this.stages.length; i++) {
      let cards = this.stages[i].getCards();
      let index = cards.findIndex(card => card.getName() === this.taskSelected);
      if (index !== -1) {
        cards.splice(index, 1);
        break;
      }
    }
    this.taskSelected = '';
  }

}

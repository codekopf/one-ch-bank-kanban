import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  stages = [{
    id: 1,
    name: 'Backlog',
    cards: [],
  }, {
    id: 2,
    name: 'To Do',
    cards: [],
  }, {
    id: 3,
    name: 'Ongoing',
    cards: [],
  }, {
    id: 4,
    name: 'Done',
    cards: [],
  }];
 
  constructor() { }

  ngOnInit() {
  }

  onAddCard() {
  }

  onCardselect(data) {
  }

  onMoveBackCard() {
  }

  onMoveForwardCard() {
  }

  onDeleteCard() {
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kanban-stage',
  templateUrl: './kanban-stage.component.html',
  styleUrls: ['./kanban-stage.component.css']
})
export class KanbanStageComponent implements OnInit {

  @Input() stage;
  @Output() onCardSelect: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {}

  ngOnInit() {
  }

  onCardSelected(data) {
  }

}

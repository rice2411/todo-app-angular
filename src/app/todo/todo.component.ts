import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() name: string = '';
  @Input() priority: string = 'Low';
  @Input() status: boolean = false;
  @Output() updateStatus: EventEmitter<any> = new EventEmitter();
  priorityColorMapping: any = {
    high: 'red',
    medium: 'blue',
    low: 'gray',
  };
  updateStatusEmit(e: any) {
    this.updateStatus.emit(e);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() name: string = '';
  @Input() priority: string = 'Low';
  checked: boolean = false;
  priorityColorMapping: any = {
    high: 'red',
    medium: 'blue',
    low: 'gray',
  };
}

import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  selectedValue = { label: 'blue', value: 'Medium', color: 'blue' };
  data: any[] = [];
  constructor(private taskService: TodoListService) {}
  ngOnInit(): void {
    this.fetchDataTasks();
  }
  fetchDataTasks() {
    this.taskService.getTasks().subscribe((res: any) => {
      this.data = res.data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { SearchTaskDto } from './dto/search-task.dto';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  selectedValue = { label: 'blue', value: 'Medium', color: 'blue' };
  data: any[] = [];
  params: SearchTaskDto = new SearchTaskDto();
  name: string = '';
  priority: string = 'Low';
  constructor(private taskService: TodoListService) {}
  ngOnInit(): void {
    this.fetchDataTasks();
  }
  fetchDataTasks() {
    this.taskService.getTasks(this.params).subscribe((res: any) => {
      this.data = res.data;
    });
  }
  searchTask(search: any) {
    this.params.search = search;
    this.fetchDataTasks();
  }
  statusFilter(status: any) {
    this.params.status = status;
    this.fetchDataTasks();
  }
  priorityFilter(priority: any) {
    this.params.priority = priority;
    this.fetchDataTasks();
  }
  updateStatus(id: string) {
    this.taskService.updateStatus(id).subscribe((res: any) => {
      this.fetchDataTasks();
    });
  }
  createTask() {
    this.taskService
      .createTask(
        this.name,
        this.priority.charAt(0).toLowerCase() + this.priority.slice(1)
      )
      .subscribe((res: any) => {
        this.name = '';
        this.priority = '';
        this.fetchDataTasks();
      });
  }
}

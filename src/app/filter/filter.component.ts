import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() searchTask: EventEmitter<string> = new EventEmitter();
  @Output() statusFilter: EventEmitter<any> = new EventEmitter();
  @Output() priorityFilter: EventEmitter<any> = new EventEmitter();
  listOfOption: any[] = [
    { option: 'low', color: 'gray' },
    { option: 'medium', color: 'blue' },
    { option: 'high', color: 'red' },
  ];
  radioValue = 'All';
  search: string = '';
  listOfTagOptions = [];
  ngOnInit(): void {}

  searchTaskEmit(e: any) {
    this.searchTask.emit(e);
  }
  statusFilterEmit(e: any) {
    this.statusFilter.emit(e);
  }
  priorityFilterEmit(e: any) {
    this.priorityFilter.emit(e);
  }
}

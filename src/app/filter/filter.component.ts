import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  listOfOption: any[] = [
    { option: 'low', color: 'gray' },
    { option: 'meidum', color: 'blue' },
    { option: 'high', color: 'red' },
  ];
  radioValue = 'All';

  ngOnInit(): void {}
}

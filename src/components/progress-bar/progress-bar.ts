import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  
  @Input() color: string = '#5CBCB9';
  @Input() progress: number = 0;
  @Input() Min_progress: number = 20;
  

  constructor() {}

}

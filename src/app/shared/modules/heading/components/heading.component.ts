import {Component, ContentChild, Input} from '@angular/core';

@Component({
  selector: 'pa-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
  @Input() level: number = 1;
  @ContentChild('child') child: ChildComponent;
}

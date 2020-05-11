import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-demo-container',
  templateUrl: './views-demo-container.component.html',
  styleUrls: ['./views-demo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsDemoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

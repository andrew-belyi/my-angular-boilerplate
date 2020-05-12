import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-views-demo-page',
  templateUrl: './views-demo-page.component.html',
  styleUrls: ['./views-demo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsDemoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

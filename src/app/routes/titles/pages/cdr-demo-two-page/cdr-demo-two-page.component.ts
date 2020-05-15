import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cdr-demo-two-page',
  templateUrl: './cdr-demo-two-page.component.html',
  styleUrls: ['./cdr-demo-two-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoTwoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

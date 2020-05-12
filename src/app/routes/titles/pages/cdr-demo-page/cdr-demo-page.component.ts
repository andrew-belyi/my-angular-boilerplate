import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cdr-demo-page',
  templateUrl: './cdr-demo-page.component.html',
  styleUrls: ['./cdr-demo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

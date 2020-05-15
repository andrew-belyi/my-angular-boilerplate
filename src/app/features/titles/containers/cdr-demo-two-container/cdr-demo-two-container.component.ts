import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cdr-demo-two-container',
  templateUrl: './cdr-demo-two-container.component.html',
  styleUrls: ['./cdr-demo-two-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoTwoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

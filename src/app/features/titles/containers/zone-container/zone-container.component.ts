import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-zone-container',
  templateUrl: './zone-container.component.html',
  styleUrls: ['./zone-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

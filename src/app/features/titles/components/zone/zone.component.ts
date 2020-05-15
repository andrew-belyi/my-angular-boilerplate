import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

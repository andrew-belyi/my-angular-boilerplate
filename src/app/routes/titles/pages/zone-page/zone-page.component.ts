import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-zone-page',
  templateUrl: './zone-page.component.html',
  styleUrls: ['./zone-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZonePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

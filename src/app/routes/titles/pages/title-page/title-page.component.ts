import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitlePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

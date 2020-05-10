import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles-page',
  templateUrl: './titles-page.component.html',
  styleUrls: ['./titles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitlesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

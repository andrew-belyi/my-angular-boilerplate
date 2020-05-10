import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

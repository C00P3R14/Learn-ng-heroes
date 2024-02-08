import { Component } from '@angular/core'
import { Hero } from '../hero'
import { FormsModule } from '@angular/forms' // <-- NgModel lives here
import { HEROES } from '../mock-heroes';
import { NgFor, NgIf,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }

  heroes:Hero[] = HEROES;

  selectedHero?:Hero;
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}

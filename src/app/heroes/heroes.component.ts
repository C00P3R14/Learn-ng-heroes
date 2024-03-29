import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { FormsModule } from '@angular/forms' // <-- NgModel lives here
import { HEROES } from '../mock-heroes';
import { NgFor, NgIf,UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService:HeroService,
    private messageService:MessageService
  ) {
    //this.heroes = heroService.getHeroes() //my idea
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes
    )
  }
 

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  heroes:Hero[] = [];

  selectedHero?:Hero;

  onSelect(hero:Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`)
  }
}

import { Component } from '@angular/core'
import { HeroesComponent } from './heroes/heroes.component'
import { MessagesComponent } from './messages/messages.component'
import { AppRoutingModule } from './app-routing.module'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, MessagesComponent, AppRoutingModule],
})
export class AppComponent {
  title = 'Tour of Heroes'
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

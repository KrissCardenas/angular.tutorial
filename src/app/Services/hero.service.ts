import { Injectable } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HeroesDAOService } from './heroes-dao.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  

  constructor(
    private heroesDAO: HeroesDAOService,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.heroesDAO.getHeroes();
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
   // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.heroesDAO.getHero(id);
  }

  updateHero(hero: Hero): Observable<any>{
    return this.heroesDAO.updateHero(hero);
  }

  addHero(hero: Hero) : Observable<any>
  {
    return this.heroesDAO.addHero(hero);
  }

  deleteHero(hero: Hero): Observable<any> {
    return this.heroesDAO.deleteHero(hero);
  }

  searchHeroes(term: string): Observable<any> {
    return this.heroesDAO.searchHeroes(term);
  }
}

import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { Heroes } from "../mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  constructor() {}
  heroes: Hero = {
    id: 1,
    name: "WindStorm"
  };
  heros = Heroes;
  ngOnInit() {}
  item: Hero;
  onSelect(itmes: Hero): void {
    this.item = itmes;
  }
}

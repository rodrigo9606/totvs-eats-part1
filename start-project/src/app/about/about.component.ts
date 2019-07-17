import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() nome: string;

  constructor() { }

  ngOnInit() {
    this.nome = "Rodrigo";

    
  }

  checkPin($event: KeyboardEvent) {
    console.log($event);
    console.log(this.nome);
  }
  Soma(nome) {
    this.nome = this.nome + " certo"
    return nome
  }
}

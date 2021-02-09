import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  listaCursos: String[] = ["Java","JavaScript","TypeScript","HTML","SQL"]; 
  public flat: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarOcultar(): void{

    this.flat = !this.flat;

  }
}

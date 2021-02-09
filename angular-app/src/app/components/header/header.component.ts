import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string = "Ricardo Alfonso Areiza Zambrano"; 
  usuario: string = "Usuario";
  cliente: string = "Cliente";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { Cliente } from "./cliente";
import { CLIENTES } from "./clientes.json";
import { ClienteService } from "./cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
	    this.clienteService.getClientes().subscribe(
	      clientes => this.listaClientes = clientes
	    );
  }

}

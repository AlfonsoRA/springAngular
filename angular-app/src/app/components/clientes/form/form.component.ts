import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import swal from 'sweetalert2'
import { ClienteService } from "../cliente.service";
import { Cliente } from "../cliente";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: String = "Crear Cliente"

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.clienteService.createCliente(this.cliente)
    .subscribe(
      Response => {
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo Cliente', `cliente ${this.cliente.nombre} creado con exito !`, 'success' )
      }
    )
  };

}

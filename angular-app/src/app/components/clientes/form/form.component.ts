import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import swal from 'sweetalert2'
import { ClienteService } from "../cliente.service";
import { Cliente } from "../cliente";
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { leadingComment } from '@angular/compiler';
import { createCipher } from 'crypto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: String = "Crear Cliente"

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

  public cargarCliente(): void{
    this.activatedRoute.params.subscribe(

    )
  }

}

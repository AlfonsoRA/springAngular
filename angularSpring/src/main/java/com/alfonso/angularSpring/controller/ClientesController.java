package com.alfonso.angularSpring.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alfonso.angularSpring.entidad.Cliente;
import com.alfonso.angularSpring.interfaces.IClientesService;

@RestController
@RequestMapping("/clientes/")
@CrossOrigin(origins= {"http://localhost:4200"})
public class ClientesController {
	
	@Autowired
	private IClientesService clientesService;
	
	@GetMapping("cliente")
	@ResponseStatus(HttpStatus.OK)
	public List<Cliente> listCliente(){
		
		return clientesService.listClientes();	
	}
	
	@GetMapping("cliente/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Cliente getCliente(@PathVariable("id") Long id) {
		return clientesService.getCliente(id);
	}
	
	@PostMapping("cliente")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente save(@RequestBody Cliente cliente) {		
		return clientesService.guardarCliente(cliente);
	}
	
	@PutMapping("cliente")
	@ResponseStatus(HttpStatus.OK)
	public Cliente updateCliente(@RequestBody Cliente cliente) {
		return clientesService.updateCliente(cliente);
	}
	
	@DeleteMapping("cliente/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void deleteCliente(@PathVariable Long id) {
		clientesService.delete(id);
	}
	
	
	
	

}

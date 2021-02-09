package com.alfonso.angularSpring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alfonso.angularSpring.entidad.Cliente;
import com.alfonso.angularSpring.interfaces.IClientesService;
import com.alfonso.angularSpring.repository.ClientesRepository;

@Service
public class ClientesService implements IClientesService{

	@Autowired
	private ClientesRepository repositoryClientes;
	
	@Override
	@Transactional(readOnly = true)
	public List<Cliente> listClientes() {
		return repositoryClientes.findAll();
	}

	@Override
	@Transactional
	public Cliente guardarCliente(Cliente cliente) {
		return repositoryClientes.save(cliente);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		repositoryClientes.deleteById(id);;
	}

	@Override
	@Transactional(readOnly = true)
	public Cliente getCliente(Long id) {
		return repositoryClientes.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Cliente updateCliente(Cliente cliente) {
		return repositoryClientes.save(cliente);
	}

}

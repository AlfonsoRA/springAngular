package com.alfonso.angularSpring.interfaces;

import java.util.List;

import com.alfonso.angularSpring.entidad.Cliente;

public interface IClientesService {
	
	public List<Cliente> listClientes();
	public Cliente getCliente(Long id);
	public Cliente guardarCliente(Cliente cliente);
	public Cliente updateCliente(Cliente cliente);
	public void delete(Long id);

}

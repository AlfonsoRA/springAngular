package com.alfonso.angularSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alfonso.angularSpring.entidad.Cliente;

@Repository
public interface ClientesRepository extends JpaRepository<Cliente, Long> {
	
	

}

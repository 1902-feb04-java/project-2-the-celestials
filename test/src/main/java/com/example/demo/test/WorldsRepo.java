package com.example.demo.test;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="worlds",path="worlds")
public interface WorldsRepo extends PagingAndSortingRepository<Worlds,Integer>{

	//List <Worlds> findByName(@Param("name")String name);
}

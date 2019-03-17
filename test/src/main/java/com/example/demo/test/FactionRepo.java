package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="factions",path="factions")
public interface FactionRepo extends PagingAndSortingRepository<Faction,Integer>{

}

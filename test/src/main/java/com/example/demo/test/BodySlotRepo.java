package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="bodyslots",path="bodyslots")
public interface BodySlotRepo extends PagingAndSortingRepository<BodySlot,Integer>{
	
}

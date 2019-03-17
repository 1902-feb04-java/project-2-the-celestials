package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="locations",path="locations")
public interface LocationRepo extends PagingAndSortingRepository<Location,Integer>{

}

package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="defenses",path="defenses")
public interface DefenseRepo extends PagingAndSortingRepository<Defense,Integer> {

}

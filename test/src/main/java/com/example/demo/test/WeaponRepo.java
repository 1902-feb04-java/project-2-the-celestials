package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="weapons",path="weapons")
public interface WeaponRepo extends PagingAndSortingRepository<Weapon,Integer>{

}

package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="ranges",path="ranges")
public interface RangeRepo extends PagingAndSortingRepository<Range,Integer>{

}

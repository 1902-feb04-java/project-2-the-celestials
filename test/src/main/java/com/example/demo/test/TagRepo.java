package com.example.demo.test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="tags",path="tags")
public interface TagRepo extends PagingAndSortingRepository<Tag,Integer>{

}

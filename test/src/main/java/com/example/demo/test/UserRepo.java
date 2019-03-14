package com.example.demo.test;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="users",path="users")
public interface UserRepo extends PagingAndSortingRepository<User,Integer>{

	//List <User> findByUsername(@Param("username")String username);
}

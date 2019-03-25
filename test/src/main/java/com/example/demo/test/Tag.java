package com.example.demo.test;


import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tags")
public class Tag extends LoreTable {

	public Tag(int id, String name) {
		super();
		this.id=id;
		this.name=name;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Tags [id=" + id + ", name=" + name + "]";
	}

	public Tag() {
		super();
		// TODO Auto-generated constructor stub
	}

}

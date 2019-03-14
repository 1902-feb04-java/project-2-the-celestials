package com.example.demo.test;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tag extends LoreTable {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;

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

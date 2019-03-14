package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Tags {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	private String name;

	/*@ManyToMany(mappedBy = "tags")
	private List<Worlds> worlds = new ArrayList<>();*/

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

	/*public List<Worlds> getWorlds() {
		return worlds;
	}

	public void setWorlds(List<Worlds> worlds) {
		this.worlds = worlds;
	}

	@Override
	public String toString() {
		return "Tags [id=" + id + ", name=" + name + ", worlds=" + worlds + "]";
	}*/

	public Tags() {
		super();
		// TODO Auto-generated constructor stub
	}

}

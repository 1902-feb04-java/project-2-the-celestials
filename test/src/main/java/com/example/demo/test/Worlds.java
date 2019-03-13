package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Worlds {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	private String name;
	private String descriptor;
	private String user_id;

	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "World_Tags", joinColumns = { @JoinColumn(name = "world_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tag_id") })
	private List<Tags> tags = new ArrayList<>();

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

	public String getDescriptor() {
		return descriptor;
	}

	public void setDescriptor(String descriptor) {
		this.descriptor = descriptor;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public List<Tags> getTags() {
		return tags;
	}

	public void setTags(List<Tags> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "Worlds [id=" + id + ", name=" + name + ", descriptor=" + descriptor + ", user_id=" + user_id + "]";
	}

	public Worlds() {
		super();
		// TODO Auto-generated constructor stub
	}

}

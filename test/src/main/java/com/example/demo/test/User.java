package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User extends AbstractLoreItem{
	private String username;
	private String password;
	@OneToMany(cascade = { CascadeType.ALL }, mappedBy="user")
	private List<World> user_worlds = new ArrayList<>();
	
	public List<World> getUser_worlds() {
		return user_worlds;
	}

	public void setUser_worlds(List<World> user_worlds) {
		this.user_worlds = user_worlds;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User() {
		super();
	}

}

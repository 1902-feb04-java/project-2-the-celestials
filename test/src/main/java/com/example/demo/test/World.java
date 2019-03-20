package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "worlds")
public class World extends AbstractLoreItem {
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	//@OneToMany(cascade = { CascadeType.ALL }, mappedBy = "world")
	//private List<Location> locations = new ArrayList<>();
	//@OneToMany(cascade = { CascadeType.ALL }, mappedBy = "world")
	//private List<Faction> factions = new ArrayList<>();

	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "World_Tags", joinColumns = { @JoinColumn(name = "world_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tag_id") })
	private List<Tag> tags = new ArrayList<>();

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

//	public List<Faction> getFactions() {
//		return factions;
//	}

//	public void setFactions(List<Faction> factions) {
//		this.factions = factions;
//	}

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
		return description;
	}

	public void setDescriptor(String description) {
		this.description = description;
	}

//	public List<Location> getLocations() {
//		return locations;
//	}
//
//	public void setLocations(List<Location> locations) {
//		this.locations = locations;
//	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "World [name=" + name + ", description=" + description + ", tags=" + tags + "]";
	}

	public World() {
		super();
		// TODO Auto-generated constructor stub
	}

}

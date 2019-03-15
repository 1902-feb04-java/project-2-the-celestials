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
import javax.persistence.Table;

@Entity
@Table(name="worlds")
public class World extends AbstractLoreItem {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	// private User user_id;
	// private List<Location> locations = new ArrayList<>();
	// private List<Faction> factions = new ArrayList<>();

	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "World_Tags", joinColumns = { @JoinColumn(name = "world_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tag_id") })
	private List<Tag> tags = new ArrayList<>();

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

	/*
	 * public User getUser_id() { return user_id; }
	 * 
	 * public void setUser_id(User user_id) { this.user_id = user_id; }
	 * 
	 * public List<Location> getLocations() { return locations; }
	 * 
	 * public void setLocations(List<Location> locations) { this.locations =
	 * locations; }
	 * 
	 * public List<Faction> getFactions() { return factions; }
	 * 
	 * public void setFactions(List<Faction> factions) { this.factions = factions }
	 */

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	/*@Override
	public String toString() {
		return "Worlds [id=" + id + ", name=" + name + ", descriptor=" + description + ", user_id=" + user_id
				+ ", locations=" + locations + ", factions=" + factions + "]";
	}*/

	public World() {
		super();
		// TODO Auto-generated constructor stub
	}

}
